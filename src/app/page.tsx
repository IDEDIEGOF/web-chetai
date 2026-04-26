"use client";

import React, { useState } from 'react';

const casesData = {
  'travel-machine': {
    name: 'Travel Machine',
    sector: 'Sector Travel',
    logo: '/travel-machine-logo.svg',
    problem: 'Pérdida de horas diarias en tareas de entrada de datos y pérdida de leads fuera de horario comercial.',
    solution: 'Integración CRM automatizada y un Bot de WhatsApp 24/7 para cualificación instantánea.',
    metrics: [
      { label: 'Ahorro Tiempo', value: '2h/día', desc: 'Ahorro diario mediante la automatización de procesos comerciales.' },
      { label: 'Disponibilidad', value: 'Bot 24/7', desc: 'Cualificación instantánea y agenda al momento de recibir el formulario web.' },
      { label: 'Conversión', value: '+15%', desc: 'Aumento directo en la tasa de conversión de leads a reuniones de ventas.' }
    ]
  },
  'noland-travel': {
    name: 'Noland Travel',
    sector: 'Sector Travel',
    logo: '/noland-logo.png',
    problem: 'Pérdida de tiempo comercial cualificando leads manualmente y cuellos de botella al agendar reuniones con clientes potenciales.',
    solution: 'Agente de IA que cualifica leads en tiempo real y agenda reuniones, integrado al completo con su CRM.',
    metrics: [
      { label: 'Cualificación', value: '24/7', desc: 'Cualificación instantánea de clientes potenciales sin depender del horario comercial.' },
      { label: 'Reuniones', value: '+35%', desc: 'Aumento en reuniones agendadas gracias a la inmediatez en el seguimiento de leads.' },
      { label: 'Integración', value: '100%', desc: 'Sincronización directa y sin fricciones con el CRM interno de la empresa.' }
    ]
  },
  'lashes-and-more': {
    name: 'Lashes&More Chamberí',
    sector: 'Estética & Belleza',
    logo: '/lashes-logo.png',
    problem: 'Ausencias de pacientes (no-shows) y dificultad para agendar citas cuando el personal estaba atendiendo.',
    solution: 'Agente omnicanal (Voz y WhatsApp) conectado a la agenda para reservas y recordatorios.',
    metrics: [
      { label: 'Omnicanal', value: 'Voz/WA', desc: 'Agentes de WhatsApp y Voz operativos 24/7 gestionando consultas.' },
      { label: 'Gestión', value: 'Citas', desc: 'Gestión de agenda y envío de recordatorios automáticos.' },
      { label: 'Conversión', value: '+10%', desc: 'Aumento en la conversión global de pacientes por inmediatez en reservas.' }
    ]
  },
  'blu-df': {
    name: 'Blu DF Ópticos',
    sector: 'Clínicas y Salud',
    logo: '/blu-logo.png',
    problem: 'Llamadas telefónicas perdidas y sobrecarga de gestión documental de facturas médicas.',
    solution: 'Recepcionista de Voz IA para agendado y OCR para automatizar la extracción de datos de facturas.',
    metrics: [
      { label: 'Recepción', value: 'Voz IA', desc: 'Recepción telefónica automatizada para agendar citas sin perder llamadas.' },
      { label: 'Backoffice', value: 'Facturas', desc: 'Extracción de datos y automatización en la gestión documental y contable.' }
    ]
  },
  'optipunt': {
    name: 'Optipunt Dr Zaben',
    sector: 'Clínicas y Salud',
    logo: '/optipunt-logo.png',
    problem: 'Gestión financiera manual propensa a errores de sincronización entre clínica y gestoría.',
    solution: 'Sistema 100% automatizado de digitalización de facturas sincronizado con un Dashboard de control.',
    metrics: [
      { label: 'Digitalización', value: '100%', desc: 'Digitalización y automatización de la gestión documental de entrada.' },
      { label: 'Finanzas', value: 'Dashboard', desc: 'Sincronización en tiempo real para control financiero preciso.' }
    ]
  }
};

export default function Home() {
  const [activeCase, setActiveCase] = useState<any>(null);

  return (
    <div className="min-h-screen relative">
      {/* Background Texture */}
      <div className="bg-warm"></div>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="logo-organic">
          <div className="isotype-shapes">
            <div className="shape" style={{ width: '22px', height: '14px' }}></div>
            <div className="shape" style={{ width: '28px', height: '16px' }}></div>
            <div className="shape" style={{ width: '20px', height: '12px' }}></div>
          </div>
          <span style={{ fontWeight: 800 }}>chetAI</span>
        </div>
        <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <a href="#soluciones" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Soluciones</a>
          <a href="#casos-exito" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>Casos de Éxito</a>
          <a href="#contacto" className="btn-terra" style={{ padding: '0.6rem 1.8rem', fontSize: '0.9rem' }}>Contactar</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ padding: '8rem 5% 4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        
        <div className="animate-reveal" style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Automatización e Inteligencia Artificial B2B
        </div>

        <h1 className="animate-reveal title-huge" style={{ maxWidth: '1200px', marginBottom: '2.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          Tu partner tecnológico para escalar tu empresa <span className="accent-terra">sin aumentar equipo ni tocar estructura.</span>
        </h1>
        
        <p className="animate-reveal" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '850px', marginBottom: '4rem', animationDelay: '0.1s', lineHeight: 1.4, fontWeight: 400 }}>
          Agentes de IA que aumentan la conversión y reducen la carga operativa.
        </p>
        
        <div className="animate-reveal" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', animationDelay: '0.2s' }}>
          <a href="#contacto" className="btn-terra">Transformar mi Empresa</a>
          <a href="#soluciones" className="btn-outline">Ver Soluciones</a>
        </div>

        {/* Integrations Section - Infinite Ticker */}
        <div className="animate-reveal marquee-container" style={{ marginTop: '6rem', animationDelay: '0.4s' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
            Integración total con tu ecosistema
          </p>
          <div className="marquee-content">
            {/* Duplicated list for seamless infinite scroll */}
            {[
              { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg?v=1' },
              { name: 'HubSpot', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg?v=1' },
              { name: 'Notion', url: '/notion-logo.png' },
              { name: 'WhatsApp', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg?v=1' },
              { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg?v=1' },
              { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg?v=1' },
              { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg?v=1' },
              { name: 'HighLevel', url: '/highlevel-logo.svg' },
              { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg?v=1' },
            ].map((logo, i) => (
              <img 
                key={i} 
                src={logo.url} 
                alt={logo.name} 
                className="logo-item" 
                style={{ filter: 'none', opacity: 1, display: 'block' }} 
              />
            ))}
            {/* Repeat */}
            {[
              { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg?v=1' },
              { name: 'HubSpot', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg?v=1' },
              { name: 'Notion', url: '/notion-logo.png' },
              { name: 'WhatsApp', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg?v=1' },
              { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg?v=1' },
              { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg?v=1' },
              { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg?v=1' },
              { name: 'HighLevel', url: '/highlevel-logo.svg' },
              { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg?v=1' },
            ].map((logo, i) => (
              <img 
                key={`rep-${i}`} 
                src={logo.url} 
                alt={logo.name} 
                className="logo-item" 
                style={{ filter: 'none', opacity: 1, display: 'block' }} 
              />
            ))}
          </div>
        </div>

        {/* Services / Solutions Grid */}
        <section id="soluciones" style={{ marginTop: '12rem', width: '100%', maxWidth: '1200px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', textAlign: 'left' }}>
          
          {/* Agente de WhatsApp */}
          <div className="card-organic animate-reveal" style={{ animationDelay: '0.3s', paddingBottom: '30px' }}>
            <div style={{ background: 'var(--bg-color)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.5 8.5 0 0 1 4.7 1.4L22 3.5l-1 4.5z"/></svg>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: 700 }}>Agente de WhatsApp</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Cualificación automática: Resuelve dudas, filtra leads y agenda reuniones en tu calendario 24/7.</p>
            
            {/* Auto-Scrolling WhatsApp Window */}
            <div className="whatsapp-window" style={{ height: '260px' }}>
              <div className="wa-header">
                <div className="wa-header-left">
                  <div className="wa-avatar-img">C</div>
                  <div className="wa-name"><span>ChetAI Bot</span><span className="wa-typing">escribiendo...</span></div>
                </div>
              </div>
              <div className="wa-body wa-chat-container">
                <div className="wa-chat-scroller">
                  <div className="wa-bubble wa-bubble-anim user step-1">Hola, me gustaría información sobre vuestros servicios. <div className="wa-time">14:45</div></div>
                  <div className="wa-bubble wa-bubble-anim bot step-2">¡Hola! Claro que sí. ¿Para qué sector es tu empresa? <div className="wa-time">14:45 <span style={{ color: '#34b7f1' }}>✓✓</span></div></div>
                  <div className="wa-bubble wa-bubble-anim user step-3">Somos una clínica dental. <div className="wa-time">14:46</div></div>
                  <div className="wa-bubble wa-bubble-anim bot step-4">Perfecto. Tenemos soluciones específicas para salud. ¿Te agendo una llamada de 15 min mañana? <div className="wa-time">14:46 <span style={{ color: '#34b7f1' }}>✓✓</span></div></div>
                  <div className="wa-bubble wa-bubble-anim user step-5">Mañana a las 10:00 genial. <div className="wa-time">14:47</div></div>
                  <div className="wa-bubble wa-bubble-anim bot step-6">¡Agendado! ✅ Recibirás el enlace por correo. <div className="wa-time">14:47 <span style={{ color: '#34b7f1' }}>✓✓</span></div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Agente de Voz */}
          <div className="card-organic animate-reveal" style={{ animationDelay: '0.4s', paddingBottom: '30px' }}>
            <div style={{ background: 'var(--bg-color)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: 700 }}>Agente de Voz</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Recepcionista IA que atiende llamadas telefónicas, resuelve incidencias y agenda citas con voz humana.</p>
            
            {/* Voice Visualizer */}
            <div className="voice-visualizer">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
              <div style={{ position: 'absolute', bottom: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, letterSpacing: '1px' }}>LÍNEA ABIERTA...</div>
            </div>
          </div>

          {/* Automatización Operativa */}
          <div className="card-organic animate-reveal" style={{ animationDelay: '0.5s', paddingBottom: '30px' }}>
            <div style={{ background: 'var(--bg-color)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: 700 }}>Automatización de Procesos</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Integración de CRMs, gestión documental y facturación. Conectamos tus sistemas para eliminar el trabajo manual.</p>
            
            {/* Professional Automation Dashboard */}
            <div className="automation-dashboard">
              <div className="dash-row" style={{ animationDelay: '0s' }}><span className="dash-tag">OCR</span> Factura extraída y validada</div>
              <div className="dash-row" style={{ animationDelay: '1s' }}><span className="dash-tag" style={{ background: '#dbeafe', color: '#1e40af' }}>CRM</span> Datos de cliente actualizados</div>
              <div className="dash-row" style={{ animationDelay: '2s' }}><span className="dash-tag" style={{ background: '#fee2e2', color: '#991b1b' }}>SYNC</span> ERP sincronizado con éxito</div>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section id="casos-exito" className="cases-section" style={{ marginTop: '12rem', width: '100%', maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="case-tag">Casos de Éxito</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>Líderes que ya <span className="accent-terra">escalan con IA.</span></h2>
          </div>

          {/* Sector Travel */}
          <div style={{ marginBottom: '4rem', textAlign: 'left' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Sector Travel</h3>
            <div className="cases-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {/* Travel Machine */}
              <button onClick={() => setActiveCase(casesData['travel-machine'])} className="case-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexDirection: 'row', padding: '30px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img src="/travel-machine-logo.svg" alt="Travel Machine" style={{ height: '60px', width: '60px', objectFit: 'contain', background: 'white', padding: '8px', borderRadius: '12px' }} />
                  <h4 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Travel Machine</h4>
                </div>
                <div style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Ver caso <span>→</span></div>
              </button>
              {/* Noland Travel */}
              <button onClick={() => setActiveCase(casesData['noland-travel'])} className="case-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexDirection: 'row', padding: '30px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img src="/noland-logo.png" alt="Noland Travel" style={{ height: '60px', width: '60px', objectFit: 'contain', background: 'white', padding: '8px', borderRadius: '12px' }} />
                  <h4 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Noland Travel</h4>
                </div>
                <div style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Ver caso <span>→</span></div>
              </button>
            </div>
          </div>

          {/* Estética y Belleza */}
          <div style={{ marginBottom: '4rem', textAlign: 'left' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Estética y Belleza</h3>
            <div className="cases-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {/* Lashes&More */}
              <button onClick={() => setActiveCase(casesData['lashes-and-more'])} className="case-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexDirection: 'row', padding: '30px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img src="/lashes-logo.png" alt="Lashes&More" style={{ height: '60px', width: '60px', objectFit: 'contain', background: 'white', padding: '8px', borderRadius: '12px' }} />
                  <h4 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Lashes&More Chamberí</h4>
                </div>
                <div style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Ver caso <span>→</span></div>
              </button>
            </div>
          </div>

          {/* Clínicas y Salud */}
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Clínicas y Salud</h3>
            <div className="cases-grid" style={{ marginTop: '0', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {/* Blu DF */}
              <button onClick={() => setActiveCase(casesData['blu-df'])} className="case-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexDirection: 'row', padding: '30px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img src="/blu-logo.png" alt="Blu DF" style={{ height: '60px', width: '60px', objectFit: 'contain', background: 'white', padding: '8px', borderRadius: '12px' }} />
                  <h4 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Blu DF Ópticos</h4>
                </div>
                <div style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Ver caso <span>→</span></div>
              </button>
              {/* Optipunt */}
              <button onClick={() => setActiveCase(casesData['optipunt'])} className="case-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexDirection: 'row', padding: '30px', border: '1px solid var(--border-color)', background: 'var(--surface-color)', cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <img src="/optipunt-logo.png" alt="Optipunt" style={{ height: '60px', width: '60px', objectFit: 'contain', background: 'white', padding: '8px', borderRadius: '12px' }} />
                  <h4 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--text-primary)' }}>Optipunt Dr Zaben</h4>
                </div>
                <div style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '5px' }}>Ver caso <span>→</span></div>
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section - Calendly */}
        <section id="contacto" style={{ marginTop: '12rem', padding: '8rem 5%', background: 'var(--surface-color)', borderRadius: '60px', width: '100%', maxWidth: '1200px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>¿Listo para <span className="accent-terra">automatizar?</span></h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
              Reserva una consultoría gratuita para ver cómo la IA puede optimizar tus procesos operativos y disparar tus ventas.
            </p>
            
            {/* Official Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/idediegofernandez/diagnostico-clinica?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=FF6B35&background_color=1A1D21&text_color=FFFFFF" 
              style={{ minWidth: '320px', height: '700px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border-color)' }}
            ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>
        </section>
      </main>

      <footer style={{ padding: '6rem 5% 4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>ChetAI · Inteligencia Artificial y Automatización</p>
        <p>© {new Date().getFullYear()} ChetAI. Elevando empresas con IA.</p>
      </footer>

      {/* Case Study Modal Overlay */}
      {activeCase && (
        <div className="modal-overlay" onClick={() => setActiveCase(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveCase(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
              <img 
                src={activeCase.logo} 
                alt={activeCase.name} 
                style={{ height: '70px', width: '70px', objectFit: 'contain', background: 'white', padding: '10px', borderRadius: '16px' }} 
              />
              <div>
                <span className="case-tag" style={{ marginBottom: '5px' }}>{activeCase.sector}</span>
                <h2 style={{ fontSize: '2rem', margin: 0, fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2 }}>{activeCase.name}</h2>
              </div>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '10px', fontWeight: 700 }}>El Problema</h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{activeCase.problem}</p>
            </div>

            <div style={{ marginBottom: '30px' }}>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '10px', fontWeight: 700 }}>La Solución ChetAI</h4>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.05rem', lineHeight: 1.6 }}>{activeCase.solution}</p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '15px', fontWeight: 700 }}>El Impacto</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {activeCase.metrics.map((metric: any, index: number) => (
                  <div key={index} style={{ background: 'var(--bg-color)', padding: '15px', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ background: 'var(--accent-muted)', color: 'var(--accent-color)', padding: '5px 12px', borderRadius: '8px', fontWeight: 800, fontSize: '1.2rem', minWidth: '100px', textAlign: 'center' }}>
                      {metric.value}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.4 }}>
                      {metric.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
