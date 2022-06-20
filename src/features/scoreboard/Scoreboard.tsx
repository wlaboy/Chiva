import { useState } from "react";
import { Team as ITeam } from "../team/teamModel";
import Team from "../team/Team";

function Scoreboard() {
  const [teams, setTeams] = useState<ITeam[]>([
    { name: "Team #1", score: 0 },
    { name: "Team #2", score: 0 },
  ]);

  const updateScore = () => {
    console.log(`Team: ${teams[0].name} | Score: ${teams[0].score}`);
    console.log(`Team: ${teams[1].name} | Score: ${teams[1].score}`);
  };

  return (
    <div className="container">
      <div className="row">
        {teams.map((team) => (
          <div className="col" key={team.name}>
            <Team name={team.name} score={team.score} />
          </div>
        ))}
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
