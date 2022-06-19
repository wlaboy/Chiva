import { useState } from "react";
import Team from "./Team";

interface ITeam {
  name: string;
  score: number;
}

function Scoreboard() {
  const [handsPlayed, setHandsPlayed] = useState<number>(0);
  const [teamOne, setTeamOne] = useState<ITeam>({
    name: "Team #1",
    score: 0,
  });
  const [teamTwo, setTeamTwo] = useState<ITeam>({
    name: "Team #2",
    score: 0,
  });

  const updateScore = () => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Team name={teamOne.name} score={teamOne.score} />
        </div>
        <div className="col">
          <Team name={teamTwo.name} score={teamTwo.score} />
        </div>
      </div>
      <div className="row m-2 pt-2">
        <button className="btn btn-primary" onClick={updateScore}>
          Enter Round
        </button>
      </div>
    </div>
  );
}

export default Scoreboard;
