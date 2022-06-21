import { useState } from "react";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [teams, setTeams] = useState([
    { name: "Team #1", score: 0 },
    { name: "Team #2", score: 0 },
  ]);

  return (
    <div className="container">
      <h1>Chiva App</h1>
      <Scoreboard teams={teams} setTeams={setTeams} />
    </div>
  );
}

export default App;
