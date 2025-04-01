'use client';

export default function BibliotecaSesgosLoader() {
  return (
    <div className="animate-pulse">
      {/* Barra de búsqueda y filtros skeleton */}
      <div className="mb-8 bg-white shadow-md rounded-lg p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="h-5 bg-neutral-200 rounded w-32 mb-1"></div>
            <div className="h-10 bg-neutral-200 rounded w-full"></div>
          </div>
          
          <div>
            <div className="h-5 bg-neutral-200 rounded w-40 mb-1"></div>
            <div className="h-10 bg-neutral-200 rounded w-48"></div>
          </div>
        </div>
      </div>

      {/* Título y contador skeleton */}
      <div className="flex justify-between items-center mb-4">
        <div className="h-8 bg-neutral-200 rounded w-48"></div>
        <div className="h-5 bg-neutral-200 rounded w-24"></div>
      </div>
      
      {/* Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="border border-neutral-200 rounded-lg overflow-hidden">
            <div className="p-5">
              <div className="h-5 bg-neutral-200 rounded w-32 mb-3"></div>
              <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-neutral-200 rounded w-11/12 mb-2"></div>
              <div className="h-4 bg-neutral-200 rounded w-10/12 mb-4"></div>
              <div className="h-8 bg-neutral-200 rounded w-24"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Información adicional skeleton */}
      <div className="rounded-lg p-6 bg-neutral-100">
        <div className="h-6 bg-neutral-200 rounded w-56 mb-4"></div>
        <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-neutral-200 rounded w-11/12 mb-4"></div>
        <div className="h-4 bg-neutral-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-neutral-200 rounded w-10/12"></div>
      </div>
    </div>
  );
}