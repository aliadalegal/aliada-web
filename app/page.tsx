export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      
      {/* ===== SECCIÓN PRINCIPAL (HERO) ===== */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Etiqueta superior */}
          <div className="mb-6">
            <span className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full">
              🌟 El primer ecosistema de Derecho Consciente para mujeres
            </span>
          </div>
          
          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-serif text-purple-800 mb-6 leading-tight">
            Recupera el poder sobre tu vida y tus derechos
          </h1>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Aliada no es un estudio jurídico tradicional. Es claridad, estrategia y acompañamiento para que dejes de ir a ciegas.
          </p>
          
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors">
              Agenda tu consulta inicial
            </button>
            
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors">
              Conoce mis servicios
            </button>
          </div>
          
          {/* Estadísticas */}
          <div className="flex justify-center items-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-purple-700">7000+</p>
              <p className="text-sm text-gray-600">Seguidoras</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-purple-700">150+</p>
              <p className="text-sm text-gray-600">Mujeres ayudadas</p>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div>
              <p className="text-3xl font-bold text-purple-700">100%</p>
              <p className="text-sm text-gray-600">Enfoque en mujeres</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* ===== MANIFIESTO ===== */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            
            <h2 className="text-3xl font-serif text-purple-800 mb-8 text-center">
              ¿Por qué existe Aliada?
            </h2>
            
            <div className="border-l-4 border-purple-500 pl-6 py-4 italic text-xl text-gray-700 mb-8 bg-purple-50 rounded-r-lg">
              "Sé lo que se siente intentar defenderte con la voz baja. Con la culpa de tener que reclamar.
              Yo también lo sentí. Y vi a cientos de mujeres sentirlo igual."
              <div className="mt-4 not-italic font-semibold text-purple-700">
                — Dra. Fabiana Carolina Guerrero
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              En Aliada no vas a encontrar palabras difíciles para marearte, ni una abogada fría que te deje esperando. 
              Acá vas a encontrar claridad, vamos a poner sobre la mesa lo que sí sabemos y cómo lo vamos a conseguir legalmente.
            </p>
            
          </div>
        </div>
      </section>

      {/* ===== SERVICIOS ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-purple-800 mb-4">
              Servicios de Acompañamiento
            </h2>
            <p className="text-xl text-gray-600">
              No más sospechas, ni incertidumbre. Solo claridad y estrategia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Aliada S.O.S */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-400">
              <div className="text-3xl mb-4">🆘</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Aliada S.O.S
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                $65.000
              </p>
              <p className="text-gray-600 mb-6">
                Consulta de urgencia para notificaciones judiciales.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Traducción de documentos
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Análisis de riesgos
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Plan de acción inmediato
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-purple-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Agendar
              </button>
            </div>
            
            {/* Aliada Preventiva */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-teal-400">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Aliada Preventiva
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                $45.000
              </p>
              <p className="text-gray-600 mb-6">
                Protección patrimonial antes de decisiones importantes.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Análisis patrimonial
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Recomendaciones de contratos
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Hoja de ruta de protección
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-purple-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Agendar
              </button>
            </div>
            
            {/* Aliada Empoderada */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-400">
              <div className="text-3xl mb-4">💪</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Aliada Empoderada
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                $65.000
              </p>
              <p className="text-gray-600 mb-6">
                Preparación para mediaciones y audiencias.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Simulación de audiencia
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Guiones de comunicación
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Técnicas asertivas
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-purple-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Agendar
              </button>
            </div>
            
            {/* Aliada Estrategia - DESTACADO */}
            <div className="bg-white rounded-xl p-6 shadow-xl border-2 border-purple-500 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <span className="bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-full">
                  ⭐ RECOMENDADO
                </span>
              </div>
              
              <div className="text-3xl mb-4 mt-4">🗺️</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                Aliada Estrategia
              </h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                $75.000
              </p>
              <p className="text-gray-600 mb-6">
                Tu Mapa Legal y Económico completo.
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Informe inicial de solvencia
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Hoja de ruta judicial
                </li>
                <li className="flex items-center">
                  <span className="text-teal-500 mr-2">✓</span>
                  Estrategia completa
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Agendar
              </button>
            </div>
            
          </div>
          
          {/* ===== SECCIÓN DE GUÍAS DIGITALES ===== */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl font-serif text-purple-800 mb-4">
        📚 Guías Digitales de Aliada
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Guías prácticas en PDF con lenguaje claro, pasos a seguir y modelos de escritos.
        Tu puerta de entrada a la claridad legal.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Guía 1: Cuota Alimentaria */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500">
        <div className="text-4xl mb-4">👶</div>
        <h3 className="text-xl font-semibold text-purple-800 mb-2">
          Guía de Cuota Alimentaria
        </h3>
        <p className="text-gray-600 mb-4">
          Todo lo que necesitás saber para reclamar, aumentar y asegurar la cuota alimentaria de tus hijos.
        </p>
        <ul className="text-sm text-gray-500 mb-6 space-y-1">
          <li>✓ Cómo calcularla</li>
          <li>✓ Cómo reclamarla</li>
          <li>✓ Cómo aumentarla</li>
          <li>✓ Modelos de escritos</li>
        </ul>
        <a 
          href="/pdfs/pdf1.pdf"
          download
          className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          📥 Descargar PDF
        </a>
      </div>
      
      {/* Guía 2: Bienes Matrimoniales */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-teal-500">
        <div className="text-4xl mb-4">🏠</div>
        <h3 className="text-xl font-semibold text-purple-800 mb-2">
          Guía de Bienes Matrimoniales
        </h3>
        <p className="text-gray-600 mb-4">
          Cómo proteger y dividir los bienes adquiridos durante el matrimonio.
        </p>
        <ul className="text-sm text-gray-500 mb-6 space-y-1">
          <li>✓ Sociedad conyugal</li>
          <li>✓ Bienes propios</li>
          <li>✓ Cómo dividirlos</li>
          <li>✓ Checklist de bienes</li>
        </ul>
        <a 
          href="/pdfs/pdf2.pdf"
          download
          className="block w-full bg-teal-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
        >
          📥 Descargar PDF
        </a>
      </div>
      
      {/* Card de información (se mantiene) */}
      <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl p-6 shadow-lg text-white">
        <div className="text-4xl mb-4">💡</div>
        <h3 className="text-xl font-semibold mb-2">
          ¿Necesitás más claridad?
        </h3>
        <p className="mb-6">
          Si tenés dudas sobre tu situación específica, agendá una consulta personalizada.
        </p>
        <a 
          href="#agenda"
          className="block w-full bg-white text-purple-700 text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          📅 Agendar consulta
        </a>
      </div>
      
    </div>
    
  </div>
</section>
          <div className="mt-12 bg-gradient-to-r from-purple-500 to-orange-400 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-serif mb-4">
              📚 Guías Digitales de Aliada
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Guías prácticas en PDF con lenguaje claro. Tu puerta de entrada a la claridad legal.
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explorar guías digitales
            </button>
          </div>
          
        </div>
      </section>

      {/* ===== TESTIMONIOS ===== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-purple-800 mb-4">
              Lo que dicen las mujeres que ya fueron aliadas
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-purple-700">Natalia</p>
                  <p className="text-sm text-gray-600">Clienta de Aliada Estrategia</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Gracias por darme claridad, ahora estoy más tranquila. Es bueno encontrar a una profesional tan humana y comprensiva."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-purple-700">Mariana</p>
                  <p className="text-sm text-gray-600">Clienta de Aliada S.O.S</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Me llegó una cédula del juzgado y estaba en blanco. En 30 minutos entendí qué hacer y me saqué un peso de encima."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-purple-700">Carolina</p>
                  <p className="text-sm text-gray-600">Clienta de Aliada Empoderada</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 italic">
                "Entré a la mediación segura, no reactiva. Defendí lo mío sin desgastarme emocionalmente."
              </p>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* ===== SECCIÓN DE AGENDA ===== */}
<section id="agenda" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-purple-800 mb-4">
          Agenda tu Consulta
        </h2>
        <p className="text-xl text-gray-600">
          Selecciona el horario que mejor te convenga
        </p>
      </div>
      
      {/* Widget de Calendly */}
      <div className="bg-gray-50 p-4 rounded-xl">
        <iframe
          src="https://calendly.com/aliada-as-legal"
          width="100%"
          height="600px"
          frameBorder="0"
          title="Agendar consulta con Aliada"
        />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          ¿Prefieres contactarme directamente?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/5493874623956"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp
          </a>
          
          <a 
            href="mailto:hola@aliada.com"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            📧 Email
          </a>
        </div>
      </div>
      
    </div>
  </div>
</section>

{/* ===== CTA FINAL ===== */}
<section className="py-16 bg-purple-700 text-white">
  <div className="container mx-auto px-4 text-center">
    
    <h2 className="text-3xl md:text-4xl font-serif mb-6">
      ¿Lista para dejar de ir a ciegas?
    </h2>
    
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Agenda tu consulta hoy y empieza a construir tu estrategia legal con claridad y respaldo.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a 
        href="#agenda"
        className="bg-orange-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 transition-colors"
      >
        📅 Agenda tu consulta
      </a>
      
      <a 
        href="https://wa.me/5493874623956"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
      >
        💬 Escríbeme por WhatsApp
      </a>
    </div>
    
  </div>
</section>
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            ¿Lista para dejar de ir a ciegas?
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agenda tu consulta hoy y empieza a construir tu estrategia legal con claridad y respaldo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-400 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 transition-colors">
              📅 Agenda tu consulta
            </button>
            
            <a 
              href="https://wa.me/5493874623956"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
            >
              💬 Escríbeme por WhatsApp
            </a>
          </div>
          
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            
            <div>
              <h3 className="text-2xl font-serif mb-4">Aliada</h3>
              <p className="text-gray-400 mb-4">
                Derecho Consciente y empoderamiento para mujeres.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Aliada S.O.S</li>
                <li>Aliada Preventiva</li>
                <li>Aliada Empoderada</li>
                <li>Aliada Estrategia</li>
                <li>Guías Digitales</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>WhatsApp: +54 9 387 462-3956</li>
                <li>Email: hola@aliada.com</li>
                <li>Instagram: @aliada.derecho</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Horarios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lunes a Viernes: 9:00 - 18:00</li>
                <li>Sábados: 9:00 - 13:00</li>
                <li>Consultas online</li>
              </ul>
            </div>
            
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2026 Aliada. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">
              Diseñado con ❤️ para empoderar mujeres
            </p>
          </div>
          
        </div>
      </footer>
      
    </main>
  )
}