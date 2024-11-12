import React, { useState } from 'react';

const Tabuleiro = () => {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  
  const [jogadorAtual, setJogadorAtual] = useState("X");

  const handleCellClick = (index) => {
    if (tabuleiro[index]) return;
    
    const novoTabuleiro = [...tabuleiro];    
    novoTabuleiro[index] = jogadorAtual;    
    setTabuleiro(novoTabuleiro);
    setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
      {tabuleiro.map((cell, index) => (
        <div
          key={index}
          onClick={() => handleCellClick(index)}
          className="w-16 h-16 flex items-center justify-center border-2 border-gray-500 cursor-pointer text-2xl font-bold"
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Tabuleiro;
