import React, { useContext } from "react";
import { GameContext } from "./GameContext";

export default function ScoreTable({ teams }) {
  const game = useContext(GameContext);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">{teams[0].name}</th>
          <th scope="col">{teams[1].name}</th>
        </tr>
      </thead>
      <tbody className="table-striped">
        <tr>
          {game.handsPlayed > 0 && (
            <>
              <th scope="row">{game.handsPlayed}</th>
              {teams.map((team, key) => (
                <td key={key}>{team.score}</td>
              ))}
            </>
          )}
        </tr>
      </tbody>
    </table>
  );
}
