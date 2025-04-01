'use client';

import { useState } from 'react';
import { Sesgo } from '@/lib/types';
import SesgoCard from './SesgoCard';

interface BibliotecaSesgosViewProps {
  sesgosCognitivos: Sesgo[];
  sesgosMetodologicos: Sesgo[];
  sesgosEstadisticos: Sesgo[];
  sesgosSociales: Sesgo[];
}

export default function BibliotecaSesgosView({
  sesgosCognitivos,
  sesgosMetodologicos,
  sesgosEstadisticos,
  sesgosSociales
}: BibliotecaSesgosViewProps) {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('todos');
  const [busqueda, setBusqueda] = useState<string>('');
  const [sesgoSeleccionado, setSesgoSeleccionado] = useState<Sesgo | null>(null);

  // Función para filtrar sesgos
  const filtrarSesgos = (sesgos: Sesgo[]): Sesgo[] => {
    if (!busqueda.trim()) return sesgos;
    
    const terminoBusqueda = busqueda.toLowerCase().trim();
    return sesgos.filter(sesgo => 
      sesgo.nombre.toLowerCase().includes(terminoBusqueda) ||
      sesgo.descripcion.toLowerCase().includes(terminoBusqueda)
    );
  };

  // Obtener los sesgos filtrados según la categoría activa y el término de búsqueda
  const obtenerSesgosFiltrados = (): Sesgo[] => {
    switch (categoriaActiva) {
      case 'cognitivos':
        return filtrarSesgos(sesgosCognitivos);
      case 'metodologicos':
        return filtrarSesgos(sesgosMetodologicos);
      case 'estadisticos':
        return filtrarSesgos(sesgosEstadisticos);
      case 'sociales':
        return filtrarSesgos(sesgosSociales);
      default:
        return filtrarSesgos([
          ...sesgosCognitivos,
          ...sesgosMetodologicos,
          ...sesgosEstadisticos,
          ...sesgosSociales
        ]);
    }
  };

  const sesgosFiltrados = obtenerSesgosFiltrados();

  return (
    <div className="animate-fade-in">
      {/* Modal para detalles de sesgo */}
      {sesgoSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{sesgoSeleccionado.nombre}</h3>
                <button 
                  onClick={() => setSesgoSeleccionado(null)}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-1">Descripción</h4>
                  <p className="text-neutral-700">{sesgoSeleccionado.descripcion}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-1">Ejemplo</h4>
                  <p className="text-neutral-700">{sesgoSeleccionado.ejemplo}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-1">Impacto en la investigación</h4>
                  <p className="text-neutral-700">{sesgoSeleccionado.impacto}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg mb-1">Estrategias para mitigar</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {sesgoSeleccionado.estrategias.map((estrategia, index) => (
                      <li key={index} className="text-neutral-700">{estrategia}</li>
                    ))}
                  </ul>
                </div>
                
                {sesgoSeleccionado.referencia && (
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Referencia</h4>
                    <p className="text-neutral-700">{sesgoSeleccionado.referencia}</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-neutral-50 px-6 py-4 rounded-b-lg border-t border-neutral-200">
              <button
                onClick={() => setSesgoSeleccionado(null)}
                className="btn btn-primary"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Barra de búsqueda y filtros */}
      <div className="mb-8 bg-white shadow-md rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="busqueda" className="block text-sm font-medium text-neutral-700 mb-1">
              Buscar sesgos
            </label>
            <input
              type="text"
              id="busqueda"
              placeholder="Buscar por nombre o descripción..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Filtrar por categoría
            </label>
            <select
              value={categoriaActiva}
              onChange={(e) => setCategoriaActiva(e.target.value)}
              className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
            >
              <option value="todos">Todos los sesgos</option>
              <option value="cognitivos">Sesgos cognitivos</option>
              <option value="metodologicos">Sesgos metodológicos</option>
              <option value="estadisticos">Sesgos estadísticos</option>
              <option value="sociales">Sesgos sociales</option>
            </select>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">
            {categoriaActiva === 'todos' 
              ? 'Todos los sesgos' 
              : `Sesgos ${categoriaActiva}`}
          </h2>
          <span className="text-sm text-neutral-500">
            {sesgosFiltrados.length} {sesgosFiltrados.length === 1 ? 'resultado' : 'resultados'}
          </span>
        </div>
        
        {sesgosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sesgosFiltrados.map((sesgo) => (
              <SesgoCard 
                key={sesgo.id} 
                sesgo={sesgo} 
                onClick={() => setSesgoSeleccionado(sesgo)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200">
            <svg
              className="mx-auto h-12 w-12 text-neutral-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-neutral-900">No se encontraron resultados</h3>
            <p className="mt-1 text-neutral-500">
              Intenta con otro término de búsqueda o cambia los filtros.
            </p>
          </div>
        )}
      </div>
      
      {/* Información adicional */}
      <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-primary-800 mb-4">¿Qué son los sesgos?</h2>
        <p className="text-primary-700 mb-4">
          Los sesgos son errores sistemáticos en el pensamiento, la recolección de datos, el análisis 
          o la interpretación que pueden llevar a conclusiones incorrectas en la investigación científica.
          Reconocer estos sesgos es el primer paso para mitigarlos y mejorar la calidad de la investigación.
        </p>
        <p className="text-primary-700">
          Explora nuestra biblioteca completa para comprender mejor cómo estos sesgos pueden afectar 
          tu trabajo y qué estrategias puedes implementar para minimizar su impacto.
        </p>
      </div>
    </div>
  );
}