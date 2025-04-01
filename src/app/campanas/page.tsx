import { campanas } from '@/data/campanas';
import CampanasView from '@/components/campanas/CampanasView';

export default function CampanasPage() {
  return <CampanasView campanas={campanas} />;
}

export function generateMetadata() {
  return {
    title: 'Campañas | Explorador de Sesgos',
    description: 'Explora nuestras campañas educativas diseñadas para ayudarte a identificar y mitigar sesgos cognitivos y metodológicos en la investigación científica.'
  };
}