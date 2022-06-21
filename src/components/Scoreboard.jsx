import Team from "./Team";

function Scoreboard({ teams, setTeams }) {
  const handleScoreUpdate = () => {
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
        <button className="btn btn-primary" onClick={handleScoreUpdate}>
          Enter Round
        </button>
      </div>
    </div>
  );
}

export default Scoreboard;
