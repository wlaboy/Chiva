import React, { useState } from "react";
import Team from "./Team";

function Scoreboard() {
  const [teamOne, setTeamOne] = useState({
    name: "Team #1",
    score: 0,
  });

  const [teamTwo, setTeamTwo] = useState({
    name: "Team #2",
    score: 0,
  });

  const handleNewGameButton = () => {
    setTeamOne({ ...teamOne, score: 0 });
    setTeamTwo({ ...teamTwo, score: 0 });
  };

  return (
    <>
      <div className="row pt-2">
        <div className="col">
          <Team team={teamOne} setTeam={setTeamOne} />
        </div>
        <div className="col">
          <Team team={teamTwo} setTeam={setTeamTwo} />
        </div>
      </div>
      <div className="d-flex pt-4 justify-content-center">
        <button
          onClick={handleNewGameButton}
          className="btn btn-primary btn-lg"
        >
          New Game
        </button>
      </div>
    </>
  );
}

export default Scoreboard;
