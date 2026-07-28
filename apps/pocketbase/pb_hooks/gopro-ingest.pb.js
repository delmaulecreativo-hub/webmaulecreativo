/// <reference path="../pb_data/types.d.ts" />

// Ingesta de grabaciones GoPro MAX (audio 360°/ambisónico) para el Atlas Sonoro.
//
// Recibe el archivo crudo de la cámara (contenedor .360/.mp4/.mov/.wav — lo
// que exporte GoPro Player/Fusion Studio), extrae el audio con ffmpeg/ffprobe
// y crea un registro en `atlas_piezas` listo para el reproductor del museo:
//   - Si detecta 4 canales (B-format ambisónico, W/X/Y/Z) conserva los 4
//     canales en un WAV sin comprimir, para que el frontend pueda decodificarlo
//     con Web Audio API y espacializarlo.
//   - En cualquier otro caso, transcodifica a estéreo AAC (.m4a) para una
//     entrega web liviana.
//
// Requiere `ffmpeg` y `ffprobe` disponibles en el PATH del servidor donde
// corre PocketBase.
//
// POST /api/atlas/gopro-ingest  (multipart/form-data, requiere superusuario)
//   grabacion         — archivo (requerido)
//   titulo            — string (requerido)
//   lat, lon           — coordenadas decimales (requerido)
//   acto              — "I" | "II" | "III" (default "I")
//   tipo              — paisaje | recitado | plantwave | mezcla (default "paisaje")
//   autor_grabacion   — string (opcional)
//   licencia          — string (opcional)

routerAdd(
  "POST",
  "/api/atlas/gopro-ingest",
  (e) => {
    const [file, header] = e.request.formFile("grabacion");
    if (!file || !header) {
      throw new BadRequestError("Falta el archivo 'grabacion'.");
    }

    const titulo = (e.request.formValue("titulo") || "").trim();
    const lat = parseFloat(e.request.formValue("lat"));
    const lon = parseFloat(e.request.formValue("lon"));
    const acto = e.request.formValue("acto") || "I";
    const tipo = e.request.formValue("tipo") || "paisaje";
    const autor = e.request.formValue("autor_grabacion") || "";
    const licencia = e.request.formValue("licencia") || "";

    if (!titulo) throw new BadRequestError("Falta 'titulo'.");
    if (Number.isNaN(lat) || Number.isNaN(lon)) {
      throw new BadRequestError("Coordenadas 'lat'/'lon' inválidas o faltantes.");
    }
    if (!["I", "II", "III"].includes(acto)) {
      throw new BadRequestError("'acto' debe ser I, II o III.");
    }
    if (!["paisaje", "recitado", "plantwave", "mezcla"].includes(tipo)) {
      throw new BadRequestError("'tipo' inválido.");
    }

    // Directorio de trabajo temporal, aislado por request.
    const workDir = `${$os.tempDir()}/gopro-ingest-${$security.randomString(12)}`;
    $os.mkdirAll(workDir, 0o755);

    try {
      const srcExt = (header.filename.split(".").pop() || "bin").toLowerCase();
      const srcPath = `${workDir}/source.${srcExt}`;
      // 32MB de toBytes() por defecto es insuficiente para video/audio crudo de cámara.
      $os.writeFile(srcPath, toBytes(file, 8 * 1024 * 1024 * 1024), 0o644);

      // 1) Detectar cantidad de canales de audio con ffprobe.
      const probeCmd = $os.cmd(
        "ffprobe", "-v", "error",
        "-select_streams", "a:0",
        "-show_entries", "stream=channels",
        "-of", "default=noprint_wrappers=1:nokey=1",
        srcPath
      );
      const channelsRaw = toString(probeCmd.output()).trim();
      const channels = parseInt(channelsRaw, 10) || 2;

      // 2) Duración del audio.
      const durationCmd = $os.cmd(
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=noprint_wrappers=1:nokey=1",
        srcPath
      );
      const duration = parseFloat(toString(durationCmd.output()).trim()) || 0;

      // 3) Transcodificar el audio al formato adecuado.
      //    Ogg/Opus para estéreo: se detecta como "audio/ogg" sin ambigüedad
      //    (a diferencia de .m4a/.aac, que distintos sniffers de mimetype
      //    etiquetan de formas inconsistentes) y pesa poco para la web.
      const isAmbisonic = channels === 4;
      const outPath = isAmbisonic ? `${workDir}/out.wav` : `${workDir}/out.ogg`;
      const convertArgs = isAmbisonic
        ? ["-y", "-i", srcPath, "-vn", "-map", "0:a:0", "-ac", "4", "-c:a", "pcm_s16le", "-ar", "48000", outPath]
        : ["-y", "-i", srcPath, "-vn", "-map", "0:a:0", "-ac", "2", "-c:a", "libopus", "-b:a", "128k", outPath];

      const convertCmd = $os.cmd("ffmpeg", ...convertArgs);
      try {
        convertCmd.run();
      } catch (convertErr) {
        throw new BadRequestError(
          "No se pudo convertir el audio con ffmpeg: " + String(convertErr)
        );
      }

      // 4) Crear el registro en atlas_piezas con el audio convertido adjunto.
      const collection = e.app.findCollectionByNameOrId("atlas_piezas");
      const record = new Record(collection);
      record.set("titulo", titulo);
      record.set("coordenadas", { lat, lon });
      record.set("acto", acto);
      record.set("tipo", tipo);
      record.set("autor_grabacion", autor);
      record.set("licencia", licencia);
      record.set("canales", isAmbisonic ? 4 : 2);
      record.set("duracion", Math.round(duration));
      record.set("archivo_audio", $filesystem.fileFromPath(outPath));
      e.app.save(record);

      return e.json(201, {
        record,
        canalesDetectados: channels,
        ambisonico: isAmbisonic,
      });
    } finally {
      // Limpieza del temporal, ocurra lo que ocurra.
      try { $os.removeAll(workDir); } catch (_) { /* best-effort */ }
    }
  },
  $apis.requireSuperuserAuth()
);
