'use client';

import { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, ScatterChart, Scatter, ZAxis, ErrorBar
} from 'recharts';

interface DatosVisualizacion {
  tipo: 'grafico-barras' | 'grafico-lineas' | 'grafico-dispersion' | 'tabla';
  titulo: string;
  datos: any[];
  ejeX?: string;
  ejeY?: string;
  categorias?: string[];
}

interface DataVisualizerProps {
  datos: DatosVisualizacion;
}

export default function DataVisualizer({ datos }: DataVisualizerProps) {
  const [clientReady, setClientReady] = useState(false);

  // Asegurarse de que los componentes de Recharts solo se rendericen en el cliente
  useEffect(() => {
    setClientReady(true);
  }, []);

  if (!clientReady) {
    return (
      <div className="animate-pulse h-64 bg-neutral-100 rounded flex items-center justify-center">
        <p className="text-neutral-500">Cargando visualización...</p>
      </div>
    );
  }

  const renderVisualizacion = () => {
    switch (datos.tipo) {
      case 'grafico-barras':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={datos.datos}
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="grupo" 
                label={{ 
                  value: datos.ejeX || '',
                  position: 'insideBottom',
                  offset: -10
                }} 
              />
              <YAxis 
                label={{ 
                  value: datos.ejeY || '',
                  angle: -90,
                  position: 'insideLeft'
                }} 
              />
              <Tooltip />
              <Legend />
              <Bar dataKey="valor" fill="#3B82F6" name="Valor">
                {datos.datos.map((entry, index) => entry.error && (
                  <ErrorBar 
                    key={`error-${index}`} 
                    dataKey="error" 
                    width={4} 
                    strokeWidth={2} 
                    stroke="#FF7300" 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        );
        
      case 'grafico-lineas':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={datos.datos}
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="x" 
                label={{ 
                  value: datos.ejeX || '',
                  position: 'insideBottom',
                  offset: -10
                }} 
              />
              <YAxis 
                label={{ 
                  value: datos.ejeY || '',
                  angle: -90,
                  position: 'insideLeft'
                }} 
              />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="y" 
                stroke="#3B82F6" 
                name="Valor" 
                dot={{ r: 5 }} 
                isAnimationActive={true}
              />
            </LineChart>
          </ResponsiveContainer>
        );
        
      case 'grafico-dispersion':
        return (
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart
              margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="x" 
                type="number" 
                name={datos.ejeX || 'X'} 
                label={{ 
                  value: datos.ejeX || '',
                  position: 'insideBottom',
                  offset: -10
                }} 
              />
              <YAxis 
                dataKey="y" 
                type="number" 
                name={datos.ejeY || 'Y'} 
                label={{ 
                  value: datos.ejeY || '',
                  angle: -90,
                  position: 'insideLeft'
                }} 
              />
              <ZAxis range={[60, 400]} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Legend />
              <Scatter name="Datos" data={datos.datos} fill="#3B82F6" />
            </ScatterChart>
          </ResponsiveContainer>
        );
        
      case 'tabla':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead>
                <tr>
                  {Object.keys(datos.datos[0] || {}).map((key) => (
                    <th 
                      key={key}
                      className="px-6 py-3 bg-neutral-50 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                {datos.datos.map((fila, index) => (
                  <tr key={index}>
                    {Object.values(fila).map((valor: any, i) => (
                      <td 
                        key={i}
                        className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700"
                      >
                        {typeof valor === 'number' ? valor.toFixed(2) : valor.toString()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        
      default:
        return (
          <div className="p-4 border border-red-300 bg-red-50 rounded">
            <p className="text-red-600">Tipo de visualización no soportado: {datos.tipo}</p>
          </div>
        );
    }
  };

  return (
    <div className="animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">{datos.titulo}</h3>
      {renderVisualizacion()}
    </div>
  );
}