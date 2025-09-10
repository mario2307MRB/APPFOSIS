
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800/80 border-t border-slate-700 mt-auto">
      <div className="container mx-auto px-4 py-4 text-center text-slate-400 text-sm">
        <p>&copy; {currentYear} Proyecto de Prueba. Generado con React y Tailwind CSS.</p>
        <p>
          Desplegado en <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Vercel</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
