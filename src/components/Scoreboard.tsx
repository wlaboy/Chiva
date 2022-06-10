import { useState } from "react";
import { Prizes } from "../models/prizes";
import { Team as ITeam } from "../models/team";
import Team from "./Team";

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

  const updateTeamOneScore = (newScore: number) => {
    let newScoreWithPrize = addPrizeToNewScore(newScore, handsPlayed);
    let updatedScore = newScoreWithPrize + teamOne.score;
    setTeamOne({ ...teamOne, score: updatedScore });
  };

  const updateTeamTwoScore = (newScore: number) => {
    let newScoreWithPrize = addPrizeToNewScore(newScore, handsPlayed);
    let updatedScore = newScoreWithPrize + teamTwo.score;
    setTeamTwo({ ...teamTwo, score: updatedScore });
  };

  const addPrizeToNewScore = (
    newScore: number,
    handsPlayed: number
  ): number => {
    let updatedScore = 0;
    switch (handsPlayed) {
      case 0:
        updatedScore = newScore + Prizes.FirstPrize;
        setHandsPlayed((handsPlayed += 1));
        break;
      case 1:
        updatedScore = newScore + Prizes.SecondPrize;
        setHandsPlayed((handsPlayed += 1));
        break;
      case 2:
        updatedScore = newScore + Prizes.ThirdPrize;
        setHandsPlayed((handsPlayed += 1));
        break;
      case 3:
        updatedScore = newScore + Prizes.FourthPrize;
        setHandsPlayed((handsPlayed += 1));
        break;
      default:
        updatedScore += newScore;
        break;
    }

    return updatedScore;
  };

  return (
    <>
      <Team
        name={teamOne.name}
        score={teamOne.score}
        onScoreUpdate={updateTeamOneScore}
      />
      <Team
        name={teamTwo.name}
        score={teamTwo.score}
        onScoreUpdate={updateTeamTwoScore}
      />
    </>
  );
}

export default Scoreboard;
