import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { PencilIcon } from './components/PencilIcon';
import { CakeIcon } from './components/CakeIcon';
import { ModalDialog } from './components/ModalDialog';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header className="bg-orange-900 py-2">
      <div className="text-center text-xl uppercase text-orange-100 md:text-3xl">React Cookie Clicker Game</div>
    </header>
    <main className="md:container md:mx-auto">
      <GameTitle />
      <div className="my-8 flex flex-col items-center">
        <CakeIcon />
        <p className="text-xs text-gray-600">Click on the cookie!</p>
      </div>
      <div className="my-8">
        <h2 className="text-center text-3xl font-semibold text-orange-900 md:text-5xl">0</h2>
      </div>
      <div className="flex justify-center gap-1">
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>2x</div>
          <div className="text-xs">1K</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>4x</div>
          <div className="text-xs">10K</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>8x</div>
          <div className="text-xs">100K</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>16x</div>
          <div className="text-xs">1M</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-900 bg-orange-200">
          <div>32x</div>
          <div className="text-xs">10M</div>
        </div>
        <div className="flex h-12 w-12 flex-col items-center justify-center rounded-lg border-2 border-orange-600 bg-orange-300">
          <div>64x</div>
          <div className="text-xs">100M</div>
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

export function GameTitle() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative m-8 rounded-lg border-2 border-orange-600 bg-orange-200 text-orange-900">
      <h1 className="p-2 pe-10 text-center text-3xl font-semibold md:p-4 md:pe-14 md:text-5xl">The Bakery</h1>
      <PencilIcon onClick={() => setShow(true)} />
      <ModalDialog className="rounded-xl p-4" show={show} onHide={() => setShow(false)}>
        <div>
          <h1>Hello, World!</h1>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      </ModalDialog>
    </div>
  );
}
