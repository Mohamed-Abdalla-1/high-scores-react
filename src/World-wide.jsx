import React from "react";

const WorldWide = (props) => {
  return (
    <table className="table table-bordered table-hover table-w">
      <thead class="thead-dark">
        <tr>
          <th colspan="2">High Scores: World-wide</th>
        </tr>
      </thead>
      <tbody>
        {props.results
          .map((country) => country.scores)
          .flat()
          .sort((a, b) => props.sortValue * b.s - props.sortValue * a.s)
          .map((player) => (
            <tr>
              <td className="td">
                {player.n[0].toUpperCase() +
                  player.n.substring(1).toLowerCase()}
              </td>
              <td>{player.s}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default WorldWide;
