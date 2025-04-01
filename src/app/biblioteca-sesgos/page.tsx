import { Suspense } from 'react';
import { sesgos, getSesgosPorCategoria } from '@/data/sesgos';
import BibliotecaSesgosView from '@/components/biblioteca/BibliotecaSesgosView';
import BibliotecaSesgosLoader from '@/components/biblioteca/BibliotecaSesgosLoader';

export default function BibliotecaSesgosPage() {
  const sesgosCognitivos = getSesgosPorCategoria('cognitivo');
  const sesgosMetodologicos = getSesgosPorCategoria('metodologico');
  const sesgosEstadisticos = getSesgosPorCategoria('estadistico');
  const sesgosSociales = sesgos.filter(sesgo => sesgo.categoria === 'social');

  return (
    <div className="container-app py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Biblioteca de Sesgos</h1>
        <p className="text-neutral-600 max-w-3xl">
          Explora nuestra colección completa de sesgos cognitivos, metodológicos y estadísticos 
          que pueden afectar el proceso de investigación científica. Aprende a identificarlos 
          y descubre estrategias para mitigarlos.
        </p>
      </div>
      
      <Suspense fallback={<BibliotecaSesgosLoader />}>
        <BibliotecaSesgosView 
          sesgosCognitivos={sesgosCognitivos}
          sesgosMetodologicos={sesgosMetodologicos}
          sesgosEstadisticos={sesgosEstadisticos}
          sesgosSociales={sesgosSociales}
        />
      </Suspense>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'Biblioteca de Sesgos | Explorador de Sesgos',
    description: 'Explora nuestra colección completa de sesgos cognitivos, metodológicos y estadísticos que pueden afectar el proceso de investigación científica.'
  };
}