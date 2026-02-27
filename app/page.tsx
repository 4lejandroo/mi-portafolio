export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8 md:p-16">
      
      {/* Sección de Presentación */}
      <header className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-800">
          Hola, soy Alejandro 👋
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-600 font-medium mb-6">
          Ingeniero Informático | Desarrollador Web y Móvil
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Recién graduado con pasión por crear soluciones tecnológicas eficientes. 
          Me especializo en el desarrollo de sistemas web y aplicaciones a medida, 
          utilizando tecnologías modernas como React, Next.js, TypeScript y Flutter.
        </p>
      </header>

      {/* Sección de Experiencia */}
      <section className="max-w-3xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-6 border-b-2 border-slate-200 pb-2">
          Experiencia Profesional
        </h3>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-lg text-slate-800">Desarrollador Fullstack (Práctica Profesional)</h4>
            <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Ene 2026</span>
          </div>
          <p className="text-blue-600 font-medium mb-3">Bramal - Ingeniería y Construcción</p>
          <p className="text-slate-600">
            Desarrollo integral (Backend y Frontend) de un sistema web corporativo enfocado en la gestión, 
            registro y visualización de reportes de trabajo para el personal de la empresa.
          </p>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 border-b-2 border-slate-200 pb-2">
          Proyectos Destacados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Proyecto 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg text-slate-800 mb-1">Sistema de Reservas UDLA</h4>
            <p className="text-sm text-blue-600 mb-3">Proyecto de Título</p>
            <p className="text-slate-600 text-sm">
              Plataforma web diseñada para la administración eficiente y reserva de salas de estudio 
              dentro de la Universidad de las Américas.
            </p>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-lg text-slate-800 mb-1">Aplicación Móvil a Medida</h4>
            <p className="text-sm text-blue-600 mb-3">Desarrollo Freelance</p>
            <p className="text-slate-600 text-sm">
              Diseño y desarrollo de una aplicación móvil nativa construida con el framework Flutter, 
              creada bajo requerimientos específicos para un cliente.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}