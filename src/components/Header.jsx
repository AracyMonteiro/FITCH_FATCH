import React from 'react';
import logo from '../assets/game-logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-6 ">
      <img className="mb-14" src={logo} alt="Logo Fitche Fatche" />
      
      <h1 className="text-3xl font-bold text-yellow-500">Fitche Fatche</h1>
    </header>
  );
}
