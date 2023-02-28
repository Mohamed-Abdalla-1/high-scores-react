import React from "react";

const PlayersScores = (props) => {
  return (
    <tbody>
      {props.results
        .sort((a, b) => props.sortValueBtn * b.s - props.sortValueBtn * a.s)
        .map((player) => (
          <tr>
            <td className="td">
              {player.n[0].toUpperCase() + player.n.substring(1).toLowerCase()}
            </td>
            <td>{player.s}</td>
          </tr>
        ))}
    </tbody>
  );
};

export default PlayersScores;
