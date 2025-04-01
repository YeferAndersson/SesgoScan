'use client';

import { motion } from 'framer-motion';

interface AchievementBadgeProps {
  titulo: string;
  descripcion: string;
  icono: string;
  nivel: 'comun' | 'poco_comun' | 'raro' | 'epico';
}

export default function AchievementBadge({ 
  titulo, 
  descripcion, 
  icono, 
  nivel 
}: AchievementBadgeProps) {
  // Determinar color según nivel de rareza
  const getBadgeColor = () => {
    switch (nivel) {
      case 'comun':
        return 'bg-neutral-100 border-neutral-300 text-neutral-800';
      case 'poco_comun':
        return 'bg-blue-50 border-blue-300 text-blue-800';
      case 'raro':
        return 'bg-purple-50 border-purple-300 text-purple-800';
      case 'epico':
        return 'bg-amber-50 border-amber-300 text-amber-800';
      default:
        return 'bg-neutral-100 border-neutral-300 text-neutral-800';
    }
  };

  // Determinar texto de nivel
  const getNivelTexto = () => {
    switch (nivel) {
      case 'comun':
        return 'Común';
      case 'poco_comun':
        return 'Poco común';
      case 'raro':
        return 'Raro';
      case 'epico':
        return 'Épico';
      default:
        return 'Común';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${getBadgeColor()} border rounded-lg p-4 flex items-center max-w-md`}
    >
      <div className="flex-shrink-0 text-3xl mr-4">
        {icono}
      </div>
      
      <div>
        <h3 className="font-semibold text-lg">{titulo}</h3>
        <p className="text-sm opacity-90">{descripcion}</p>
        <div className="mt-2">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-white bg-opacity-50">
            {getNivelTexto()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}