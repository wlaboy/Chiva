import { IonButton } from "@ionic/react";
import { useContext, useState } from "react";
import { SettingsContextType } from "../@types/settings";
import { SettingsContext } from "../context/SettingsContext";
import { Prizes } from "../models/prizes";
import { Team as TeamModel } from "../models/team";
import Team from "./Team";

function Scoreboard() {
  const { teamOneName, teamTwoName, usePrizes } = useContext(
    SettingsContext
  ) as SettingsContextType;

  const [handsPlayed, setHandsPlayed] = useState<number>(0);
  const [teamOneScore, setTeamOneScore] = useState<number>(0);

  const [teamTwo, setTeamTwo] = useState<TeamModel>({
    name: "Team #2",
    score: 0,
  });

  const handleTeamOneScoreUpdate = (newScore: number) => {
    let updatedScore: number = 0;

    if (usePrizes) {
      let newScoreWithPrize = addPrizeToNewScore(newScore, handsPlayed);
      updatedScore = newScoreWithPrize + teamOneScore;
    } else {
      updatedScore += teamOneScore;
    }

    setTeamOneScore(updatedScore);
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

  const handleNewGameClick = () => {
    setTeamOneScore(0);
    setTeamTwo({ name: "Team #2", score: 0 });
  };

  return (
    <>
      <Team
        name={teamOneName}
        score={teamOneScore}
        onScoreUpdate={handleTeamOneScoreUpdate}
      />
      <Team
        name={teamTwoName}
        score={teamTwo.score}
        onScoreUpdate={updateTeamTwoScore}
      />
      <div style={{ padding: "2rem 1rem 2rem 1rem" }}>
        <IonButton onClick={handleNewGameClick} expand="block">
          New Game
        </IonButton>
      </div>
    </>
  );
}

export default Scoreboard;
