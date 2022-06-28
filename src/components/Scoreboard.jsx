import React, { useContext, useState } from "react";
import { GameContext } from "./GameContext";
import Team from "./Team";

function Scoreboard() {
  const game = useContext(GameContext);

  const [teams, setTeams] = useState([
    { id: 1, name: "Team #1", score: 0 },
    { id: 2, name: "Team #2", score: 0 },
  ]);

  const handleNewGameButton = () => {
    setTeams([
      { id: 1, name: "Team #1", score: 0 },
      { id: 2, name: "Team #2", score: 0 },
    ]);
    game.handsPlayed = 0;
  };

  const updateScore = (id, newScore) => {
    const teamToUpdate = teams.find((team) => team.id === id);
    setTeams(
      teams.map((team) => {
        if (team.id === teamToUpdate.id) {
          return {
            ...team,
            score: team.score + calculateNewScoreWithPrizes(newScore),
          };
        }
        return team;
      })
    );
    updateHandsPlayed();
  };

  const updateHandsPlayed = () => {
    game.handsPlayed += 1;
  };

  const calculateNewScoreWithPrizes = (newScore) => {
    const prizes = {
      firstPrize: 100,
      secondPrize: 75,
      thirdPrize: 50,
      fourthPrize: 25,
    };

    if (game.usePrizes) {
      switch (game.handsPlayed) {
        case 0:
          newScore += prizes.firstPrize;
          break;
        case 1:
          newScore += prizes.secondPrize;
          break;
        case 2:
          newScore += prizes.thirdPrize;
          break;
        case 3:
          newScore += prizes.fourthPrize;
          break;
        default:
          newScore += 0;
          break;
      }
    }
    return newScore;
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
