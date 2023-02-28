import React from "react";
import PlayersScores from "./PlayersScores";

const CountriesScores = (props) => {
  return (
    <div>
      {props.results
        .sort((a, b) =>
          a.name.toUpperCase() < b.name.toUpperCase()
            ? -1
            : a.name.toUpperCase() < b.name.toUpperCase()
            ? 1
            : 0
        )
        .map((country) => (
          <table className="table table-bordered table-hover table-w">
            <thead class="thead-dark">
              <tr>
                <th colspan="2">High Scores: {country.name}</th>
              </tr>
            </thead>
            <PlayersScores
              results={country.scores}
              sortValueBtn={props.sortValue}
            />
          </table>
        ))}
    </div>
  );
};

export default CountriesScores;
