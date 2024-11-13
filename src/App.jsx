import React, { useState } from "react";
import Tabuleiro from "./components/Tabuleiro";
import GameOver from "./components/GameOver";
import Jogadores from "./components/Jogadores";
import Header from "./components/Header";
import { COMBINACOES } from "./combinacoes";

const App = () => {
  const [jogadores, setJogadores] = useState([
    { nome: "Jogador 1", simbolo: "X" },
    { nome: "Jogador 2", simbolo: "O" }
  ]);
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState(0);
  const [vencedor, setVencedor] = useState(null);

  const jogar = (index) => {
    if (tabuleiro[index] || vencedor) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogadores[jogadorAtual].simbolo;
    setTabuleiro(novoTabuleiro);

    const ganhou = COMBINACOES.some((comb) =>
      comb.every((i) => novoTabuleiro[i] === jogadores[jogadorAtual].simbolo)
    );

    if (ganhou) {
      setVencedor(jogadores[jogadorAtual].nome); 
    } else if (novoTabuleiro.every((cell) => cell)) {
      setVencedor("Empate");
    } else {
      setJogadorAtual((prev) => 1 - prev);
    }
  };

  const jogarNovamente = () => {
    setTabuleiro(Array(9).fill(null));
    setVencedor(null);
    setJogadorAtual(0);
  };

  return (
    <div style={{ backgroundImage: `url(/bg-pattern.png)` }}>
      <Header />
      <div className=" mx-auto text-center mt-5">
        <Jogadores jogadores={jogadores} setJogadores={setJogadores} />
        <Tabuleiro tabuleiro={tabuleiro} jogar={jogar} />
        {vencedor && (
          <div className="absolute inset-0 flex justify-center items-center">
            <GameOver vencedor={vencedor} jogarNovamente={jogarNovamente} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
