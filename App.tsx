
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="mb-6">
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">Proyecto de Prueba de Vercel</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-400 to-indigo-500">
              ¡Despliegue Exitoso!
            </h1>
          </div>
          <p className="text-gray-300 mb-8 text-lg">
            Esta es una aplicación simple de React + TypeScript estilizada con Tailwind CSS. Utilízala para verificar que tus despliegues en Vercel funcionan correctamente.
          </p>
          
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Contador Interactivo</h2>
            <p className="text-7xl font-mono font-bold my-6 text-cyan-300">{count}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={decrement}
                className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
              >
                - Disminuir
              </button>
              <button
                onClick={reset}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
              >
                Reiniciar
              </button>
              <button
                onClick={increment}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-200 transform hover:scale-105"
              >
                + Aumentar
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
