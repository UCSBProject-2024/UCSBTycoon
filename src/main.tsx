import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header className="bg-orange-900 py-2">
      <div className="text-center text-xl uppercase text-orange-100 md:text-3xl">React Cookie Clicker Game</div>
    </header>
    <main className="md:container md:mx-auto">
      <div className="my-8">
        <h1 className="mx-8 rounded-lg border-2 border-orange-600 bg-orange-200 p-2 text-center text-3xl font-semibold text-orange-900 md:p-4 md:text-5xl">
          The Bakery
        </h1>
      </div>
      <div className="my-8 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-48 w-48 stroke-orange-900">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
          />
        </svg>
        <p className="text-xs text-gray-600">Click on the cookie!</p>
      </div>
      <div className="my-8">
        <h2 className="text-center text-3xl font-semibold text-orange-900 md:text-5xl">0</h2>
      </div>
      <div className="flex justify-center gap-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          2x
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          4x
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          8x
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          16x
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          32x
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-orange-600 bg-orange-300">
          64x
        </div>
      </div>
      <div className="my-2">
        <p className="text-center text-sm">Buy some items and multiply your production.</p>
      </div>
      <div className="my-4 text-center">
        <button className="rounded-lg bg-orange-900 px-8 py-2 text-white">Restart Game!</button>
      </div>
    </main>
  </React.StrictMode>
);
