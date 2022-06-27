import React, { useState } from "react";
import Team from "./Team";

function Scoreboard() {
  const [teams, setTeams] = useState([
    { id: 1, name: "Team #1", score: 0 },
    { id: 2, name: "Team #2", score: 0 },
  ]);

  const handleNewGameButton = () => {
    setTeams([
      { id: 1, name: "Team #1", score: 0 },
      { id: 2, name: "Team #2", score: 0 },
    ]);
  };

  const updateScore = (id, newScore) => {
    const teamToUpdate = teams.find((team) => team.id === id);
    setTeams(
      teams.map((team) => {
        if (team.id === teamToUpdate.id) {
          return { ...team, score: team.score + newScore };
        }
        return team;
      })
    );
  };

  return (
    <>
      <div className="row pt-2">
        <div className="col">
          <Team team={teams[0]} updateScore={updateScore} />
        </div>
        <div className="col">
          <Team team={teams[1]} updateScore={updateScore} />
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
