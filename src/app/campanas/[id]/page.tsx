import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCampanaPorId } from '@/data/campanas';
import { getEscenariosPorCampana } from '@/data/escenarios';
import EscenarioCard from '@/components/escenarios/EscenarioCard';

interface CampanaDetailPageProps {
  params: {
    id: string;
  };
}

export default function CampanaDetailPage({ params }: CampanaDetailPageProps) {
  const campana = getCampanaPorId(params.id);
  
  if (!campana) {
    return notFound();
  }
  
  const escenarios = getEscenariosPorCampana(campana.id);
  
  // Determinar color de nivel
  const getNivelColor = () => {
    switch (campana.nivel) {
      case 'principiante':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'intermedio':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'avanzado':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-neutral-100 text-neutral-800 border-neutral-200';
    }
  };

  return (
    <div className="container-app py-8">
      <div className="mb-6">
        <Link href="/campanas" className="text-primary-600 hover:text-primary-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a campañas
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-card overflow-hidden mb-10">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/3 relative">
            <div className="h-64 md:h-full relative">
              <Image
                src={campana.imagenPortada || '/images/campanas/default.jpg'}
                alt={campana.titulo}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          
          <div className="p-6 md:p-8 md:w-2/3">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className={`px-3 py-1 text-sm rounded-full border ${getNivelColor()}`}>
                {campana.nivel.charAt(0).toUpperCase() + campana.nivel.slice(1)}
              </span>
              
              <span className="px-3 py-1 text-sm rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200">
                {campana.area}
              </span>
              
              {campana.estaCompleta ? (
                <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-800 border border-green-200">
                  Campaña completa
                </span>
              ) : (
                <span className="px-3 py-1 text-sm rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                  En desarrollo
                </span>
              )}
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{campana.titulo}</h1>
            
            <p className="text-neutral-600 mb-6">
              {campana.descripcion}
            </p>
            
            <div className="border-t border-neutral-200 pt-6">
              <div className="flex flex-wrap gap-4 items-center">
                <div>
                  <span className="text-sm text-neutral-500">Escenarios</span>
                  <p className="font-semibold">{escenarios.length}</p>
                </div>
                
                <div>
                  <span className="text-sm text-neutral-500">Fecha creación</span>
                  <p className="font-semibold">
                    {new Date(campana.fechaCreacion).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                
                <div className="ml-auto">
                  <Link 
                    href={`/campanas/${campana.id}/escenarios/${escenarios[0]?.id}`}
                    className="btn btn-primary"
                  >
                    Comenzar campaña
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Escenarios</h2>
        
        <div className="space-y-6">
          {escenarios.map((escenario, index) => (
            <EscenarioCard 
              key={escenario.id}
              escenario={escenario}
              campanaId={campana.id}
              numero={index + 1}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
        <h2 className="text-xl font-semibold mb-4">Sobre esta campaña</h2>
        
        <p className="text-neutral-600 mb-4">
          Esta campaña está diseñada para ayudarte a identificar y mitigar sesgos comunes en el 
          campo de {campana.area.toLowerCase()}. A través de escenarios realistas, desarrollarás 
          las habilidades necesarias para reconocer y evitar estos sesgos en tu propia investigación.
        </p>
        
        <div className="text-sm text-neutral-500">
          <p>
            <strong>Nivel recomendado:</strong> {
              campana.nivel === 'principiante' ? 'Principiante - No se requiere experiencia previa' :
              campana.nivel === 'intermedio' ? 'Intermedio - Se recomienda conocimiento básico del área' :
              'Avanzado - Para investigadores con experiencia en el área'
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: CampanaDetailPageProps) {
  const campana = getCampanaPorId(params.id);
  
  if (!campana) {
    return {
      title: 'Campaña no encontrada',
      description: 'La campaña que buscas no existe o ha sido eliminada.'
    };
  }
  
  return {
    title: `${campana.titulo} | Explorador de Sesgos`,
    description: campana.descripcion
  };
}