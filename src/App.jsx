import React, { useContext } from "react";
import { GameContext } from "./components/GameContext";
import Scoreboard from "./components/Scoreboard";

function App() {
  const game = useContext(GameContext);

  return (
    <div className="container pt-3">
      <h1 className="display-1 text-center">Chiva</h1>
      <GameContext.Provider value={game}>
        <Scoreboard />
      </GameContext.Provider>
    </div>
  );
}

export default App;
