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
    <div className="grid grid-cols-3 grid-row-3 gap-2 w-96 mx-auto rounded bg-amber-100">
      {tabuleiro.map((cell, index) => (
        <div
          key={index}
          onClick={() => handleCellClick(index)}
          className="my-2 ml-5 w-20 h-20 flex items-center justify-center border-2 border-gray-600 text-2xl font-bold rounded"
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Tabuleiro;
