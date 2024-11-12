// src/components/GameOver.jsx
import React from 'react';

function GameOver({ vencedor, jogarNovamente }) {
  return (
    <div className="flex flex-col items-center justify-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg text-center text-white">
      <h2 className="text-4xl font-bold text-yellow-400 mb-4">Game Over</h2>
      
      <p className="text-xl mb-6">{vencedor === 'Empate' ? 'Empate!' : `Vencedor: ${vencedor}`}</p>
      
      <button onClick={jogarNovamente} className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">
        Jogar novamente
      </button>
    </div>
  );
}

export default GameOver;
