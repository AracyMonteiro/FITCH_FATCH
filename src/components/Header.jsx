import React from 'react';
import logo from '../assets/game-logo.png'; 

export default function Header() {
  return (
    <header className="flex center items-center" >
      <img className="mb-4 mt-5 ml-auto w-14 h-14" src={logo} alt="Fitch Fatch" />
      <h1 className="mt-5 mb-5 ml-4 mr-auto text-stone-950 font-semibold uppercase text-2xl">Fitche Fatche</h1>
    </header>
  );
};
