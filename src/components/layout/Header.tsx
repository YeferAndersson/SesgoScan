'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container-app py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <img 
                src="/images/logo_img.png" 
                alt="Explorador de Sesgos Logo" 
                className="absolute inset-0 rounded-full object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-transparent bg-clip-text">SesgoScan</span>
          </Link>
          
          {/* Menú para desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/campanas" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Campañas
            </Link>
            <Link href="/biblioteca-sesgos" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Biblioteca de Sesgos
            </Link>
            <Link href="/perfil" className="text-neutral-700 hover:text-primary-600 transition-colors">
              Mi Perfil
            </Link>
          </nav>
          
          {/* Botón para móvil */}
          <button 
            className="md:hidden text-neutral-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Menú para móvil */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 space-y-2 md:hidden">
            <Link 
              href="/campanas" 
              className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Campañas
            </Link>
            <Link 
              href="/biblioteca-sesgos" 
              className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Biblioteca de Sesgos
            </Link>
            <Link 
              href="/perfil" 
              className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Mi Perfil
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}