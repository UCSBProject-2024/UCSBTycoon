import React from 'react';

export function Header() {
  return (
    <header className="header">
      <div className="title">
        <h1>
          <span className="font1">UCSB</span>
          <span className="font2"> Tycoon</span>
        </h1>
      </div>
      <div className="secondary">
        <h2>Chris Woolson, Aavash Adhikari, Tyler Canepa, Zach Duckering </h2>
      </div>
    </header>
    
    /*<header className="bg-blue-900 py-2">
      <div className="text-right text-xs text-yellow-400">Chris Woolson, Chris Woolson,
       Chris Woolson, Chris Woolson</div>
      <div className="text-center text-xl uppercase text-yellow-400 md:text-3xl">UCSB Tycoon</div>
    </header>*/
  );
}
