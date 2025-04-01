import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import EscenarioView from '@/components/escenarios/EscenarioView';
import EscenarioLoader from '@/components/escenarios/EscenarioLoader';
import { getEscenarioPorId } from '@/data/escenarios';

// Esta página se renderiza tanto en el cliente como en el servidor
export default function EscenarioPage({ 
  params 
}: { 
  params: { id: string; escenarioId: string } 
}) {
  // Este código se ejecuta durante SSR
  const escenario = getEscenarioPorId(params.escenarioId);
  
  if (!escenario) {
    return notFound();
  }

  return (
    <div className="container-app py-8">
      <Suspense fallback={<EscenarioLoader />}>
        <EscenarioView escenarioId={params.escenarioId} campanaId={params.id} />
      </Suspense>
    </div>
  );
}

// Genera metadatos para SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { id: string; escenarioId: string } 
}) {
  const escenario = getEscenarioPorId(params.escenarioId);
  
  if (!escenario) {
    return {
      title: 'Escenario no encontrado',
      description: 'El escenario que buscas no existe o ha sido eliminado.'
    };
  }
  
  return {
    title: `${escenario.titulo} | Explorador de Sesgos`,
    description: escenario.descripcion
  };
}