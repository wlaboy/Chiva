import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Prizes } from "../models/prizes";
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

  const handleTeamOneScoreUpdate = (newScore: number) => {
    let newScoreWithPrize = addPrizeToNewScore(newScore, handsPlayed);
    let updatedScore = newScoreWithPrize + teamOne.score;
    setTeamOne({ ...teamOne, score: updatedScore });
  };

  const addPrizeToNewScore = (
    newScore: number,
    handsPlayed: number
  ): number => {
    let updatedScore: number = 0;

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
    <Container fluid="md">
      <Row>
        <Col>
          <Team
            name={teamOne.name}
            score={teamOne.score}
            onScoreUpdate={handleTeamOneScoreUpdate}
          />
        </Col>
        <Col>
          <Team
            name={teamTwo.name}
            score={teamTwo.score}
            onScoreUpdate={function (newScore: number): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Scoreboard;
