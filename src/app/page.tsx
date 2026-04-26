import React from 'react';

export const metadata = {
  title: 'chetAI | IA para Agencias de Viajes',
  description: 'Optimizamos tu agencia de viajes con Agentes de IA que venden, cualifican y asisten a tus viajeros 24/7.',
};

export default function Home() {
  return (
    <div className="min-h-screen">
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
        
        <h1 className="animate-reveal title-huge" style={{ maxWidth: '1200px', marginBottom: '2.5rem' }}>
          Automatiza la atención al viajero con un <span className="accent-terra">agente personalizado</span> en tu agencia
        </h1>
        
        <p className="animate-reveal" style={{ fontSize: '1.8rem', color: 'var(--text-primary)', maxWidth: '950px', marginBottom: '4rem', animationDelay: '0.1s', lineHeight: 1.3, fontWeight: 500 }}>
          Aumenta en un <span style={{ color: 'var(--accent-color)', fontWeight: 800 }}>90% la conversión</span> con un agente que responde, cualifica y agenda reunión al momento con tu equipo de ventas.
        </p>
        
        <div className="animate-reveal" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center', animationDelay: '0.2s' }}>
          <a href="#contacto" className="btn-terra">Transformar mi Agencia</a>
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
              { name: 'Notion', url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?v=1' },
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
              { name: 'Notion', url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png?v=1' },
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Cualificación automática: Pregunta por presupuesto, fechas y agende reuniones directamente en tu calendario.</p>
            
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
                  <div className="wa-bubble wa-bubble-anim user step-1">Hola, busco viaje a Bali en Agosto. ✈️ <div className="wa-time">14:45</div></div>
                  <div className="wa-bubble wa-bubble-anim bot step-2">¡Genial! 🌴 ¿Qué presupuesto tienes por persona? <div className="wa-time">14:45 <span style={{ color: '#34b7f1' }}>✓✓</span></div></div>
                  <div className="wa-bubble wa-bubble-anim user step-3">Unos 2.500€ aprox. <div className="wa-time">14:46</div></div>
                  <div className="wa-bubble wa-bubble-anim bot step-4">Perfecto. ¿Te viene bien una llamada mañana a las 10:00 para cerrar detalles? <div className="wa-time">14:46 <span style={{ color: '#34b7f1' }}>✓✓</span></div></div>
                  <div className="wa-bubble wa-bubble-anim user step-5">Sí, me viene perfecto. <div className="wa-time">14:47</div></div>
                  <div className="wa-bubble wa-bubble-anim bot step-6">¡Agendado! ✅ Recibirás un correo con el enlace. <div className="wa-time">14:47 <span style={{ color: '#34b7f1' }}>✓✓</span></div></div>
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Responde llamadas, resuelve dudas y agenda citas con una voz humana y empática, sin esperas ni centralitas.</p>
            
            {/* Voice Visualizer */}
            <div className="voice-visualizer">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
              <div style={{ position: 'absolute', bottom: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '10px', fontWeight: 700, letterSpacing: '1px' }}>ESCUCHANDO...</div>
            </div>
          </div>

          {/* Automatización Operativa */}
          <div className="card-organic animate-reveal" style={{ animationDelay: '0.5s', paddingBottom: '30px' }}>
            <div style={{ background: 'var(--bg-color)', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
            </div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: 700 }}>Automatización Operativa</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Conectamos tu CRM y sistemas de reserva para automatizar contratos, pagos y gestión de leads sin errores.</p>
            
            {/* Professional Automation Dashboard */}
            <div className="automation-dashboard">
              <div className="dash-row" style={{ animationDelay: '0s' }}><span className="dash-tag">CRM</span> Lead cualificado guardado</div>
              <div className="dash-row" style={{ animationDelay: '1s' }}><span className="dash-tag" style={{ background: '#dbeafe', color: '#1e40af' }}>EMAIL</span> Itinerario enviado automáticamente</div>
              <div className="dash-row" style={{ animationDelay: '2s' }}><span className="dash-tag" style={{ background: '#fee2e2', color: '#991b1b' }}>SYNC</span> Disponibilidad de hotel confirmada</div>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section id="casos-exito" className="cases-section" style={{ marginTop: '12rem', width: '100%', maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="case-tag">Casos de Éxito</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>Impacto real en <span className="accent-terra">agencias líderes.</span></h2>
          </div>

          <div className="cases-grid">
            {/* Travel Machine */}
            <div className="case-card">
              <div style={{ marginBottom: '20px' }}>
                <img src="/travel-machine-logo.svg" alt="Travel Machine Logo" style={{ height: '50px', width: 'auto' }} />
              </div>
              <span className="case-tag">Agencia de Viajes</span>
              <h3 className="case-title">Travel Machine</h3>
              <div className="case-metrics">
                <div className="metric-item">
                  <span className="metric-value">2h</span>
                  <span className="metric-text">Ahorro diario mediante la automatización de procesos comerciales e integración CRM.</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">⚡</span>
                  <span className="metric-text">Bot de contacto instantáneo: Cualificación y agenda al momento de recibir el formulario.</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">+15%</span>
                  <span className="metric-text">Aumento directo en la tasa de conversión de leads a reuniones de ventas.</span>
                </div>
              </div>
            </div>

            {/* Noland Travel */}
            <div className="case-card">
              <div style={{ marginBottom: '20px' }}>
                <img src="/noland-logo.png" alt="Noland Travel Logo" style={{ height: '50px', width: 'auto' }} />
              </div>
              <span className="case-tag">Agencia de Viajes</span>
              <h3 className="case-title">Noland Travel</h3>
              <div className="case-metrics">
                <div className="metric-item">
                  <span className="metric-value">24/7</span>
                  <span className="metric-text">Atención al viajero ininterrumpida gestionando consultas complejas sin intervención humana.</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">-60%</span>
                  <span className="metric-text">Reducción drástica en la carga de soporte repetitivo para el equipo operativo.</span>
                </div>
                <div className="metric-item">
                  <span className="metric-value">9.8/10</span>
                  <span className="metric-text">Satisfacción del cliente final gracias a la inmediatez y precisión en las respuestas.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Calendly */}
        <section id="contacto" style={{ marginTop: '12rem', padding: '8rem 5%', background: 'var(--surface-color)', borderRadius: '60px', width: '100%', maxWidth: '1200px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>Despegamos <span className="accent-terra">juntos?</span></h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
              Reserva una consultoría gratuita para ver cómo la IA puede hacer que tu agencia no deje de vender ni un segundo.
            </p>
            
            {/* Official Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/idediegofernandez/diagnostico-clinica?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=e2725b" 
              style={{ minWidth: '320px', height: '700px', borderRadius: '24px', overflow: 'hidden' }}
            ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          </div>
        </section>
      </main>

      <footer style={{ padding: '6rem 5% 4rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>ChetAI · Soluciones IA para Travel</p>
        <p>© {new Date().getFullYear()} ChetAI. Elevando el sector turismo.</p>
      </footer>
    </div>
  );
}
