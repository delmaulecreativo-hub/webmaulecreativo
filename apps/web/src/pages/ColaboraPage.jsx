import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Building2, GraduationCap, Landmark, Mountain } from 'lucide-react';
import SiteChrome from '@/components/SiteChrome';
import PageHead from '@/components/PageHead';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { IMG } from '@/lib/mauleData';

const PUBLICOS = [
  { icon: Landmark, t: 'Museos', d: 'Exhibiciones inmersivas y archivos vivos del territorio.' },
  { icon: GraduationCap, t: 'Universidades', d: 'Investigación aplicada y residencias académicas.' },
  { icon: Building2, t: 'Empresas', d: 'Identidad territorial, innovación y experiencias de marca.' },
  { icon: Mountain, t: 'Territorios', d: 'Municipios y comunidades que quieren narrarse.' },
];

const TIPOS = ['Museo', 'Universidad', 'Empresa', 'Territorio', 'Otro'];

export default function ColaboraPage() {
  const [form, setForm] = useState({ nombre: '', email: '', organizacion: '', tipo: 'Territorio', mensaje: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [error, setError] = useState('');

  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await pocketbaseClient.collection('colaboraciones').create(form);
      setStatus('done');
    } catch (err) {
      setStatus('error');
      setError('No pudimos enviar tu mensaje. Intenta nuevamente.');
    }
  };

  return (
    <div className="grain relative min-h-[100dvh] bg-background">
      <PageHead 
        title="Colabora"
        description="Iniciemos una colaboración. Museos, universidades, empresas y territorios pueden trabajar con Maule Creativo en proyectos de inteligencia territorial e innovación creativa."
      />
      <SiteChrome current="Colaborar · Contacto" />

      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="absolute inset-0">
          <img src={IMG.colabora} alt="Colaboración sobre el mapa del territorio" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background to-background" />
        </div>
        <div className="relative mx-auto max-w-[90rem] px-6 md:px-12">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Estación 05 · Colabora con nosotros
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
            El territorio es un archivo vivo. Construyámoslo juntos.
          </motion.h1>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PUBLICOS.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-sm border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
              >
                <p.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <p className="mt-4 font-display text-xl">{p.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-24">
        {status === 'done' ? (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-sm border border-primary/40 bg-card p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
              <Check className="h-7 w-7 text-primary" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-light">Gracias, {form.nombre.split(' ')[0]}</h2>
            <p className="mt-3 text-muted-foreground">Recibimos tu mensaje. El laboratorio se pondrá en contacto contigo pronto.</p>
          </motion.div>
        ) : (
          <form onSubmit={submit} className="rounded-sm border border-border/50 bg-card/40 p-8 backdrop-blur-sm">
            <h2 className="font-display text-2xl font-light">Iniciar una colaboración</h2>
            <p className="mt-2 text-sm text-muted-foreground">Cuéntanos quién eres y qué te gustaría construir con Maule Creativo.</p>

            <div className="mt-8 grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="nombre" className="text-sm text-foreground/80">Nombre</label>
                <input id="nombre" required value={form.nombre} onChange={upd('nombre')} className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-5">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm text-foreground/80">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={upd('email')} className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="org" className="text-sm text-foreground/80">Organización <span className="text-muted-foreground">(opcional)</span></label>
                  <input id="org" value={form.organizacion} onChange={upd('organizacion')} className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="tipo" className="text-sm text-foreground/80">Tipo de colaboración</label>
                <select id="tipo" value={form.tipo} onChange={upd('tipo')} className="rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary">
                  {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="mensaje" className="text-sm text-foreground/80">Mensaje</label>
                <textarea id="mensaje" required rows={4} value={form.mensaje} onChange={upd('mensaje')} className="resize-none rounded-sm border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
              </div>
            </div>

            {status === 'error' && <p className="mt-4 text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-60"
            >
              {status === 'sending' ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</> : 'Enviar propuesta'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
