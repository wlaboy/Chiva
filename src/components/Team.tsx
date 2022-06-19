interface Props {
  name: string;
  score: number;
}

function Team({ name, score }: Props) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-title">
          Score: <span>{score}</span>
        </p>
        <p className="card-subtitle text-muted mb-2">{name}</p>
        <input
          className="form-control"
          type="number"
          placeholder="Enter score"
        />
      </div>
    </div>
  );
}

export default Team;
