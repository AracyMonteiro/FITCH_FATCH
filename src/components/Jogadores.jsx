import React from "react";

const Jogadores = ({ jogadores }) => {
  return (
    <div className="">
      {jogadores.map((jogador, index) => (
        <div key={index} className="mb-2 mx-auto px-4 py-2 font-semibold uppercase w-96 rounded bg-amber-100">
          <span className="ml-2 text-2xl">{jogador.nome}</span>
          <span className="ml-2 text-2xl"> -  {jogador.simbolo}</span>
        </div>
      ))}
    </div>
  );
};

export default Jogadores;
