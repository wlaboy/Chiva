import { useState } from "react";
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

  return (
    <div className="pt-3">
      <div className="row">
        <div className="col">
          <Team team={teamOne} setTeam={setTeamOne} />
        </div>
        <div className="col">
          <Team team={teamTwo} setTeam={setTeamTwo} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          <button className="btn btn-primary btn-lg">New Game</button>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
