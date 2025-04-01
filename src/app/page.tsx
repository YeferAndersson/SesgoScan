'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getCampanasDestacadas } from '@/data/campanas';

export default function Home() {
  // Obtener las campañas destacadas
  const campanasDestacadas = getCampanasDestacadas();

  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20 ">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Descubre y supera los sesgos en tu investigación
            </h1>
            <p className="text-xl mb-8">
              Una plataforma interactiva diseñada para ayudarte a identificar y mitigar sesgos cognitivos y metodológicos en tu proceso de investigación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/campanas" 
                className="btn bg-white text-primary-600 hover:bg-neutral-100 focus:ring-white"
              >
                Explorar Campañas
              </Link>
              <Link 
                href="/biblioteca-sesgos" 
                className="btn bg-transparent border border-white text-white hover:bg-white/10 focus:ring-white"
              >
                Biblioteca de Sesgos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-neutral-50">
        <div className="container-app">
          <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Explora Escenarios</h3>
              <p className="text-neutral-600">
                Participa en escenarios de investigación realistas y toma decisiones sobre el diseño experimental, análisis de datos y más.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Identifica Sesgos</h3>
              <p className="text-neutral-600">
                Recibe retroalimentación personalizada sobre los sesgos que pueden haber influido en tus decisiones y cómo pueden afectar los resultados.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-primary-100 text-primary-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Aprende Estrategias</h3>
              <p className="text-neutral-600">
                Descubre estrategias prácticas para mitigar sesgos en tu trabajo futuro y mejora la rigurosidad de tus investigaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured campaigns - Ahora con campañas reales */}
      <section className="py-16">
        <div className="container-app">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Campañas destacadas</h2>
            <Link href="/campanas" className="text-primary-600 hover:text-primary-800">
              Ver todas →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campanasDestacadas.map((campana) => (
              <div key={campana.id} className="card hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={campana.imagenPortada || '/images/campanas/default.jpg'}
                    alt={campana.titulo}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevenir loop infinito
                      target.src = '/images/campanas/default.jpg';
                    }}
                  />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/campanas/${campana.id}`} className="hover:text-primary-600 transition-colors">
                    {campana.titulo}
                  </Link>
                </h3>
                
                <p className="text-neutral-600 text-sm mb-4">
                  {campana.descripcion.length > 120 
                    ? `${campana.descripcion.substring(0, 120)}...` 
                    : campana.descripcion}
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t border-neutral-200">
                  <span className="text-sm text-neutral-500">
                    {campana.escenarios.length} {campana.escenarios.length === 1 ? 'escenario' : 'escenarios'}
                  </span>
                  
                  <Link 
                    href={`/campanas/${campana.id}`}
                    className="btn btn-outline py-1"
                  >
                    Explorar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-secondary-100 py-16">
        <div className="container-app text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tus habilidades de investigación?</h2>
          <p className="text-xl text-neutral-700 mb-8 max-w-3xl mx-auto">
            Únete a la comunidad de investigadores comprometidos con la excelencia metodológica y la objetividad.
          </p>
          <Link 
            href="/campanas" 
            className="btn btn-primary text-lg px-8 py-3"
          >
            Comenzar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}