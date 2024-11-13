import React from 'react';
import logo from '../assets/game-logo.png'; 

export default function Header() {
  return (
    <header className="flex center items-center mx-auto " >
      <img className="mb-20 w-32 h-32" src={logo} alt="Fitch Fatch" />
      <h1 className="mt-8 text-4xl text-white uppercase font-title">Fitche Fatche</h1>
    </header>
  );
};
