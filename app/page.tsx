"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita parpadeos al cargar el tema
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 font-sans min-h-screen flex transition-colors duration-300">
      
      {/* BOTÓN MODO CLARO / OSCURO (Fijo arriba a la derecha) */}
      {mounted && (
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed top-8 right-8 z-50 p-3 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform text-xl"
          aria-label="Cambiar tema"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      )}

      {/* BARRA LATERAL (Fija a la izquierda, adaptada al tema claro/oscuro) */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 p-8 flex flex-col justify-center z-40 transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-12 text-slate-900 dark:text-white tracking-wider">
          ALEJANDRO<span className="text-blue-600 dark:text-cyan-400">.</span>
        </h2>
        <ul className="space-y-8 text-sm font-bold tracking-widest text-slate-500 dark:text-slate-400">
          <li>
            <a href="#inicio" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-4 group">
              <span className="w-4 h-0.5 bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 transition-colors"></span> INICIO
            </a>
          </li>
          <li>
            <a href="#habilidades" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-4 group">
              <span className="w-4 h-0.5 bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 transition-colors"></span> HABILIDADES
            </a>
          </li>
          <li>
            <a href="#experiencia" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-4 group">
              <span className="w-4 h-0.5 bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 transition-colors"></span> EXPERIENCIA
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-4 group">
              <span className="w-4 h-0.5 bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-600 dark:group-hover:bg-cyan-400 transition-colors"></span> PORTAFOLIO
            </a>
          </li>
        </ul>
      </nav>

      {/* CONTENIDO PRINCIPAL (Con margen para la barra lateral) */}
      <main className="ml-64 w-full px-12 md:px-24 py-12">
        
        {/* SECCIÓN 1: INICIO */}
        <section id="inicio" className="min-h-screen flex flex-col justify-center max-w-4xl pt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white transition-colors duration-300">
            Hola, soy Alejandro 👋
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-cyan-400 font-medium mb-8">
            Ingeniero Informático | Desarrollador Web y Móvil
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Recién graduado con pasión por crear soluciones tecnológicas eficientes. 
            Me especializo en el desarrollo de sistemas web y aplicaciones a medida, 
            transformando ideas complejas en interfaces limpias y funcionales.
          </p>
        </section>

        {/* SECCIÓN 2: HABILIDADES */}
        <section id="habilidades" className="min-h-screen flex flex-col justify-center max-w-4xl pt-20">
          <h3 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white flex items-center gap-4">
            <span className="w-8 h-0.5 bg-blue-600 dark:bg-cyan-400"></span>
            Tecnologías y Lenguajes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-400 transition-all shadow-sm">
              <h4 className="text-blue-600 dark:text-cyan-400 font-semibold text-lg mb-4">Frontend & Web</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">HTML & CSS</span>
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">JavaScript</span>
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">React & Next.js</span>
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-400 transition-all shadow-sm">
              <h4 className="text-blue-600 dark:text-cyan-400 font-semibold text-lg mb-4">Backend & BD</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">.NET</span>
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">Python</span>
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">PHP</span>
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">SQL Workbench</span>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-400 transition-all shadow-sm md:col-span-2">
              <h4 className="text-blue-600 dark:text-cyan-400 font-semibold text-lg mb-4">Móvil & Herramientas</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">Flutter</span>
                <span className="bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-full text-sm font-medium">Firebase</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: EXPERIENCIA */}
        <section id="experiencia" className="min-h-screen flex flex-col justify-center max-w-4xl pt-20">
          <h3 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white flex items-center gap-4">
            <span className="w-8 h-0.5 bg-blue-600 dark:bg-cyan-400"></span>
            Experiencia Profesional
          </h3>
          <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border-l-4 border-blue-600 dark:border-cyan-400 shadow-sm transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-xl text-slate-900 dark:text-white">Desarrollador Fullstack</h4>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Ene 2026</span>
            </div>
            <p className="text-blue-600 dark:text-cyan-400 font-medium mb-4">Bramal - Ingeniería y Construcción</p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Desarrollo integral (Backend y Frontend) de un sistema web corporativo enfocado en la gestión, 
              registro y visualización de reportes de trabajo para el personal de la empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4: PROYECTOS */}
        <section id="proyectos" className="min-h-screen flex flex-col justify-center max-w-4xl pt-20">
          <h3 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white flex items-center gap-4">
            <span className="w-8 h-0.5 bg-blue-600 dark:bg-cyan-400"></span>
            Proyectos Destacados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Sistema de Reservas UDLA</h4>
              <p className="text-sm text-blue-600 dark:text-cyan-400 mb-4 font-medium">Proyecto de Título</p>
              <p className="text-slate-600 dark:text-slate-300">
                Plataforma web diseñada para la administración eficiente y reserva de salas de estudio.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
              <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">Aplicación Móvil</h4>
              <p className="text-sm text-blue-600 dark:text-cyan-400 mb-4 font-medium">Flutter & Firebase</p>
              <p className="text-slate-600 dark:text-slate-300">
                Diseño y desarrollo de una aplicación móvil nativa a medida.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}