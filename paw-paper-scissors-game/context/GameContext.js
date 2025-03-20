import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  function makePlayerChoice(choice) {
    setPlayerChoice(choice);
  }

  function makeComputerChoice() {
    const choices = [1, 2, 3]; // 1 is rock, 2 is paper, 3 is scissors
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    setComputerChoice(choice);
    return choice;
  }

  function determineWinner(player, computer) {
    if (player === computer) {
      setGameResult("DRAW");
      return "DRAW";
    }

    if (
      (player === 1 && computer === 3) || // rock > scissors
      (player === 2 && computer === 1) || // paper > rock
      (player === 3 && computer === 2) // scissors > paper
    ) {
      setGameResult("WIN");
      return "WIN";
    }

    setGameResult("LOSE");
    return "LOSE";
  }

  function playRound(playerChoice) {
    makePlayerChoice(playerChoice);
    const computer = makeComputerChoice();
    determineWinner(playerChoice, computer);
    setRoundsPlayed((prevRounds) => prevRounds + 1);
  }

  function resetGame() {
    setPlayerChoice(null);
    setComputerChoice(null);
    setGameResult(null);
    setRoundsPlayed(0);
  }

  return (
    <GameContext.Provider
      value={{
        playerChoice,
        computerChoice,
        gameResult,
        roundsPlayed,
        playRound,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
