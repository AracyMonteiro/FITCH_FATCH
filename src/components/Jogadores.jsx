import React from "react";
const Jogadores = ({ jogadores, setJogadores }) => {
    const editarNome = (index, novoNome) => {
      const novosJogadores = [...jogadores];
      novosJogadores[index].nome = novoNome;
      setJogadores(novosJogadores);
    };
  return (
    <div className="">
      {jogadores.map((jogador, index) => (
        <div key={index} className="mb-2 mx-auto px-4 py-2 font-semibold uppercase w-96 rounded bg-amber-100">
        <input
            type="text"
            value={jogador.nome}
            onChange={(e) => editarNome(index, e.target.value)}
            className="border p-1 mr-2"
          />
          <span className="ml-2 text-2xl"> {jogador.simbolo}</span>
        </div>
      ))}
    </div>
  );
};

export default Jogadores;
