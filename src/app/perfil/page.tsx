'use client';

import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/userStore';
import { campanas } from '@/data/campanas';
import Link from 'next/link';
import Image from 'next/image';

export default function PerfilPage() {
  const { usuario, iniciarSesion } = useUserStore();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('progreso');
  
  // Simular carga del perfil para demo
  useEffect(() => {
    const cargarPerfil = async () => {
      // Si no hay usuario activo, cargar el usuario demo
      if (!usuario) {
        await iniciarSesion('demo@example.com', 'password');
      }
      setLoading(false);
    };
    
    cargarPerfil();
  }, [usuario, iniciarSesion]);
  
  if (loading) {
    return (
      <div className="container-app py-12 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!usuario) {
    return (
      <div className="container-app py-12">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Acceso no disponible</h1>
          <p className="text-neutral-600 mb-6">
            No se pudo cargar el perfil de usuario. Por favor, intenta nuevamente.
          </p>
          <Link href="/" className="btn btn-primary">
            Volver al inicio
          </Link>
        </div>
      </div>
    );
  }

  // Cálculo del progreso general (porcentaje de escenarios completados)
  const calcularProgresoGeneral = () => {
    // Para demostración, simularemos un progreso (entre 15% y 75%)
    return Math.floor(15 + Math.random() * 60);
  };

  // Campañas en progreso (para demostración)
  const campanasEnProgreso = campanas.slice(0, 3).map(campana => ({
    ...campana,
    progreso: Math.floor(20 + Math.random() * 80), // Progreso aleatorio entre 20% y 100%
    ultimaActividad: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString() // Actividad en los últimos 30 días
  }));
  
  // Logros simulados
  const logros = [
    {
      id: 'logro-1',
      nombre: 'Investigador Novato',
      descripcion: 'Completaste tu primer escenario.',
      fecha: '2025-02-10',
      icono: '🔍',
      nivel: 'comun'
    },
    {
      id: 'logro-2',
      nombre: 'Mente Crítica',
      descripcion: 'Identificaste correctamente un sesgo de confirmación.',
      fecha: '2025-02-12',
      icono: '🧠',
      nivel: 'comun'
    },
    {
      id: 'logro-3',
      nombre: 'Explorador de Sesgos',
      descripcion: 'Completaste escenarios en tres disciplinas diferentes.',
      fecha: '2025-02-15',
      icono: '🌟',
      nivel: 'poco_comun'
    },
    {
      id: 'logro-4',
      nombre: 'Maestro del Método',
      descripcion: 'Alcanzaste una puntuación perfecta en un escenario de nivel avanzado.',
      fecha: '2025-02-20',
      icono: '🏆',
      nivel: 'raro'
    }
  ];

  // Renderizar la pestaña activa
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'progreso':
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Tu progreso general</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-neutral-700">Progreso total</span>
                  <span className="text-sm font-medium text-neutral-700">{calcularProgresoGeneral()}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-4">
                  <div 
                    className="bg-primary-600 h-4 rounded-full"
                    style={{ width: `${calcularProgresoGeneral()}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-4xl font-bold text-primary-600">{usuario.progreso.escenariosCompletados.length}</p>
                  <p className="text-neutral-600">Escenarios completados</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-4xl font-bold text-primary-600">{usuario.progreso.logros.length}</p>
                  <p className="text-neutral-600">Logros desbloqueados</p>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-4xl font-bold text-primary-600">{usuario.progreso.campanasIniciadas.length}</p>
                  <p className="text-neutral-600">Campañas en progreso</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-4">Campañas en progreso</h2>
            
            <div className="space-y-4 mb-8">
              {campanasEnProgreso.map((campana) => (
                <div key={campana.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">{campana.titulo}</h3>
                    <span className="text-sm text-neutral-500">
                      Última actividad: {new Date(campana.ultimaActividad).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-neutral-600">Progreso</span>
                      <span className="text-sm text-neutral-600">{campana.progreso}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full"
                        style={{ width: `${campana.progreso}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-right mt-4">
                    <Link href={`/campanas/${campana.id}`} className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                      Continuar campaña →
                    </Link>
                  </div>
                </div>
              ))}
              
              <div className="text-center">
                <Link href="/campanas" className="btn btn-outline">
                  Ver todas las campañas
                </Link>
              </div>
            </div>
          </div>
        );
        
      case 'logros':
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Tus logros desbloqueados</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {logros.map((logro) => (
                <div 
                  key={logro.id} 
                  className={`bg-white rounded-lg shadow-md p-4 flex items-center ${
                    logro.nivel === 'raro' ? 'border-2 border-purple-300' :
                    logro.nivel === 'poco_comun' ? 'border-2 border-blue-300' :
                    'border border-neutral-200'
                  }`}
                >
                  <div className="flex-shrink-0 text-3xl mr-4">
                    {logro.icono}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{logro.nombre}</h3>
                    <p className="text-sm text-neutral-600">{logro.descripcion}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        logro.nivel === 'raro' ? 'bg-purple-100 text-purple-800' :
                        logro.nivel === 'poco_comun' ? 'bg-blue-100 text-blue-800' :
                        'bg-neutral-100 text-neutral-800'
                      }`}>
                        {logro.nivel === 'raro' ? 'Raro' :
                         logro.nivel === 'poco_comun' ? 'Poco común' :
                         'Común'}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {new Date(logro.fecha).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-6 text-center">
              <h3 className="font-semibold mb-2">Próximos logros</h3>
              <p className="text-neutral-600 mb-4">
                Completa más escenarios y desbloquea nuevos logros para tu perfil.
              </p>
              <Link href="/campanas" className="btn btn-primary">
                Explorar campañas
              </Link>
            </div>
          </div>
        );
        
      case 'preferencias':
        return (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Preferencias de usuario</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
                  defaultValue={usuario.nombre}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
                  defaultValue={usuario.email}
                  disabled
                />
                <p className="mt-1 text-xs text-neutral-500">El email no se puede cambiar</p>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Área de interés
                </label>
                <select
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
                  defaultValue={usuario.areaInteres || ''}
                >
                  <option value="">Selecciona un área</option>
                  <option value="Medicina">Medicina</option>
                  <option value="Psicología">Psicología</option>
                  <option value="Ciencias Sociales">Ciencias Sociales</option>
                  <option value="Economía">Economía</option>
                  <option value="Estadística">Estadística</option>
                  <option value="Ecología">Ecología</option>
                  <option value="Historia">Historia</option>
                  <option value="Ciencia de Datos">Ciencia de Datos</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-1">
                  Nivel de experiencia
                </label>
                <select
                  className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
                  defaultValue={usuario.nivelExperiencia || ''}
                >
                  <option value="">Selecciona un nivel</option>
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  className="btn btn-primary"
                >
                  Guardar cambios
                </button>
              </div>
            </div>
            
            <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-6">
              <h3 className="font-semibold mb-2">Privacidad de datos</h3>
              <p className="text-neutral-600 mb-4">
                Tus datos se utilizan únicamente para personalizar tu experiencia en la plataforma.
                No compartimos tus datos con terceros.
              </p>
              <div className="flex items-center">
                <input
                  id="anonimo"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  defaultChecked
                />
                <label htmlFor="anonimo" className="ml-2 block text-sm text-neutral-700">
                  Participar de forma anónima en estadísticas generales
                </label>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="container-app py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Mi Perfil</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="md:flex items-center">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <div className="relative w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-4xl font-bold">
              {usuario.nombre.charAt(0)}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold">{usuario.nombre}</h2>
            <p className="text-neutral-600">{usuario.email}</p>
            
            <div className="mt-2 flex flex-wrap gap-2">
              {usuario.areaInteres && (
                <span className="text-xs bg-neutral-100 text-neutral-800 px-2 py-1 rounded-full">
                  {usuario.areaInteres}
                </span>
              )}
              
              {usuario.nivelExperiencia && (
                <span className="text-xs bg-neutral-100 text-neutral-800 px-2 py-1 rounded-full">
                  {usuario.nivelExperiencia === 'principiante' ? 'Principiante' :
                   usuario.nivelExperiencia === 'intermedio' ? 'Intermedio' :
                   'Avanzado'}
                </span>
              )}
              
              <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded-full">
                Miembro desde {new Date(usuario.fechaRegistro).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="border-b border-neutral-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('progreso')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'progreso'
                  ? 'border-b-2 border-primary-600 text-primary-600'
                  : 'text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
            >
              Progreso
            </button>
            
            <button
              onClick={() => setActiveTab('logros')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'logros'
                  ? 'border-b-2 border-primary-600 text-primary-600'
                  : 'text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
            >
              Logros
            </button>
            
            <button
              onClick={() => setActiveTab('preferencias')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'preferencias'
                  ? 'border-b-2 border-primary-600 text-primary-600'
                  : 'text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
              }`}
            >
              Preferencias
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          {renderActiveTab()}
        </div>
      </div>
    </div>
  );
}