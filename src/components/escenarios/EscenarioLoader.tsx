'use client';

export default function EscenarioLoader() {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-neutral-200 rounded w-3/4 mb-8"></div>
      
      <div className="h-3 bg-neutral-200 rounded mb-3 w-full"></div>
      <div className="h-3 bg-neutral-200 rounded mb-3 w-11/12"></div>
      <div className="h-3 bg-neutral-200 rounded mb-3 w-4/5"></div>
      <div className="h-3 bg-neutral-200 rounded mb-6 w-3/4"></div>
      
      <div className="space-y-4 mb-8">
        <div className="border border-neutral-200 rounded-md p-6">
          <div className="h-4 bg-neutral-200 rounded mb-4 w-1/2"></div>
          <div className="h-3 bg-neutral-200 rounded mb-3 w-full"></div>
          <div className="h-3 bg-neutral-200 rounded mb-3 w-11/12"></div>
        </div>
        <div className="border border-neutral-200 rounded-md p-6">
          <div className="h-4 bg-neutral-200 rounded mb-4 w-2/3"></div>
          <div className="h-3 bg-neutral-200 rounded mb-3 w-full"></div>
          <div className="h-3 bg-neutral-200 rounded mb-3 w-10/12"></div>
        </div>
        <div className="border border-neutral-200 rounded-md p-6">
          <div className="h-4 bg-neutral-200 rounded mb-4 w-1/3"></div>
          <div className="h-3 bg-neutral-200 rounded mb-3 w-full"></div>
          <div className="h-3 bg-neutral-200 rounded mb-3 w-9/12"></div>
        </div>
      </div>
      
      <div className="h-8 bg-neutral-200 rounded w-40"></div>
    </div>
  );
}