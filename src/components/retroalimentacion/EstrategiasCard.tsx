'use client';

interface EstrategiasCardProps {
  estrategias: string[];
}

export default function EstrategiasCard({ estrategias }: EstrategiasCardProps) {
  if (!estrategias || estrategias.length === 0) {
    return (
      <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Estrategias recomendadas</h3>
        <p className="text-neutral-600">
          No hay estrategias específicas recomendadas en este momento.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-primary-800 mb-4">Estrategias recomendadas</h3>
      
      <ul className="space-y-3">
        {estrategias.map((estrategia, index) => (
          <li key={index} className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <svg 
                className="h-5 w-5 text-primary-600" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <span className="ml-3 text-primary-700">{estrategia}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t border-primary-200">
        <h4 className="font-medium text-primary-800 mb-2">Nota importante</h4>
        <p className="text-sm text-primary-700">
          Aplicar estas estrategias en tu trabajo futuro te ayudará a mitigar los sesgos 
          identificados y a mejorar la calidad y objetividad de tus investigaciones.
        </p>
      </div>
    </div>
  );
}