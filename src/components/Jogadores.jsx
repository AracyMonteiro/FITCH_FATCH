import React from "react";

const Jogadores = ({ jogadores }) => {
  return (
    <div className="Jogadores mb-5">
      {jogadores.map((jogador, index) => (
        <div key={index} className="mb-2">
          <span className="text-xl font-bold text-gray-700">{jogador.nome}</span>
          <span className="ml-2 text-2xl"> -{jogador.simbolo}</span>
        </div>
      ))}
    </div>
  );
};

export default Jogadores;
