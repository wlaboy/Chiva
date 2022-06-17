import { Button, Card, InputGroup } from "react-bootstrap";

interface Props {
  name: string;
  score: number;
  onScoreUpdate: (newScore: number) => void;
}

function Team({ name, score, onScoreUpdate }: Props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Score: <span>{score}</span>
        </Card.Title>
        <Card.Subtitle>{name}</Card.Subtitle>
        <InputGroup>
          <input
            className="form-control"
            type="number"
            placeholder="Enter score here"
          />
          <Button>Enter</Button>
        </InputGroup>
      </Card.Body>
    </Card>
  );
}

export default Team;
