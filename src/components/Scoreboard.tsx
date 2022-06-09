import { useState } from "react";
import { Prizes } from "../models/prizes";
import { Team as ITeam } from "../models/team";
import Team from "./Team";

function Scoreboard() {
  const [handsPlayed, setHandsPlayed] = useState<number>(0);
  const [teamOne, setTeamOne] = useState<ITeam>({
    name: "Geek Squad",
    score: 0,
  });

  const [teamTwo, setTeamTwo] = useState<ITeam>({
    name: "Muscle Squad",
    score: 0,
  });

  const addPrizeToNewScore = (newScore: number, handsPlayed: number) => {
    switch (handsPlayed) {
      case 0:
        newScore += Prizes.FirstPrize;
        break;
      case 1:
        newScore += Prizes.SecondPrize;
        break;
      case 2:
        newScore += Prizes.ThirdPrize;
        break;
      case 3:
        newScore += Prizes.FourthPrize;
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Team name={teamOne.name} score={teamOne.score} />
      <Team name={teamTwo.name} score={teamTwo.score} />
    </div>
  );
}

export default Scoreboard;
