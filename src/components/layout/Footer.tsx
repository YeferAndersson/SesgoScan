import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200">
      <div className="container-app py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Explorador de Sesgos</h3>
            <p className="text-neutral-600">
              Una herramienta educativa para sensibilizar sobre los sesgos cognitivos y metodológicos en la investigación.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/campanas" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Campañas
                </Link>
              </li>
              <li>
                <Link href="/biblioteca-sesgos" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Biblioteca de Sesgos
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-neutral-600 hover:text-primary-600 transition-colors">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-neutral-600">
              ¿Tienes preguntas o sugerencias?
            </p>
            <a 
              href="mailto:contacto@exploradorsesgos.com" 
              className="text-primary-600 hover:text-primary-800 transition-colors"
            >
              sesgoscan@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-200 text-center text-neutral-600">
          <p>{year} SesgoScan</p>
        </div>
      </div>
    </footer>
  );
}