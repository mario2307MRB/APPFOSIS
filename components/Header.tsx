
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <svg
            className="w-8 h-8 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"
            ></path>
          </svg>
          <h1 className="text-xl font-bold text-white">Prueba de Despliegue en Vercel</h1>
        </div>
        <a 
          href="https://vercel.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
        >
          Hecho para Vercel
        </a>
      </div>
    </header>
  );
};

export default Header;
