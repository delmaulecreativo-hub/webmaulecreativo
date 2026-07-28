/// <reference path="../database-types.d.ts" />

migrate(
  (app) => {
    const collection = new Collection({
      type: 'base',
      name: 'atlas_piezas',
      listRule: '',
      viewRule: '',
      createRule: null,
      updateRule: null,
      deleteRule: null,
      fields: [
        { type: 'text', name: 'titulo', required: true, max: 160 },
        { type: 'geoPoint', name: 'coordenadas', required: true },
        {
          type: 'select',
          name: 'acto',
          required: true,
          maxSelect: 1,
          values: ['I', 'II', 'III'],
        },
        {
          type: 'file',
          name: 'archivo_audio',
          required: true,
          maxSelect: 1,
          maxSize: 314572800, // 300MB — deja espacio para WAV 4 canales sin comprimir
          mimeTypes: [
            'audio/wav', 'audio/x-wav', 'audio/wave',
            'audio/mpeg', 'audio/mp4', 'audio/aac',
            'audio/ogg', 'audio/opus', 'audio/flac',
          ],
        },
        { type: 'number', name: 'duracion', required: false, min: 0 }, // segundos
        {
          type: 'select',
          name: 'tipo',
          required: true,
          maxSelect: 1,
          values: ['paisaje', 'recitado', 'plantwave', 'mezcla'],
        },
        { type: 'editor', name: 'transcripcion', required: false },
        { type: 'text', name: 'licencia', required: false, max: 200 },
        { type: 'text', name: 'autor_grabacion', required: false, max: 160 },
        {
          type: 'number',
          name: 'canales',
          required: false,
          min: 1,
          max: 8,
        }, // 2 = estéreo, 4 = ambisónico B-format (para el reproductor)
        { type: 'autodate', name: 'created', onCreate: true, onUpdate: false },
        { type: 'autodate', name: 'updated', onCreate: true, onUpdate: true },
      ],
    });
    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('atlas_piezas');
    app.delete(collection);
  }
);
