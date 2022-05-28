import { Team as ITeam } from "../models/team";
import Team from "./Team";

interface ScoreboardProps {}

const teams: ITeam[] = [
  { name: "Team #1", score: 0 },
  { name: "Team #2", score: 0 },
];

function Scoreboard() {
  return (
    <div>
      <p>Hello Scoreboard!</p>
      {teams.map((team) => (
        <Team name={team.name} score={team.score} />
      ))}
    </div>
  );
}

export default Scoreboard;
