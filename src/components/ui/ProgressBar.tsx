'use client';

interface ProgressBarProps {
  progress: number;  // valor entre 0 y 100
  label?: string;
  showPercentage?: boolean;
  height?: string;
  colorClass?: string;
  animated?: boolean;
}

export default function ProgressBar({
  progress,
  label,
  showPercentage = false,
  height = 'h-2',
  colorClass = 'bg-primary-600',
  animated = true
}: ProgressBarProps) {
  // Asegurar que el progreso esté entre 0 y 100
  const cappedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-sm text-neutral-600 mb-1">
          <span>{label}</span>
          {showPercentage && <span>{Math.round(cappedProgress)}%</span>}
        </div>
      )}
      
      <div className={`w-full ${height} bg-neutral-200 rounded-full overflow-hidden`}>
        <div 
          className={`${colorClass} ${animated ? 'transition-all duration-500 ease-out' : ''} rounded-full`} 
          style={{ width: `${cappedProgress}%` }}
        >
          <div className={height}></div>
        </div>
      </div>
    </div>
  );
}