import React from 'react';
import logo from '../assets/game-logo.png';

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-center mt-8 mb-8">
      <img className="w-12 h-12  object-contain" src={logo} alt="Logo Fitche Fatche" />
      
      <h1 className="text-3xl font-bold text-yellow-500">Fitche Fatche</h1>
    </header>
  );
}
