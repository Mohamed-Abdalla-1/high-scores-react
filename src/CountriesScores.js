import React from "react";

import PlayersScores from "./PlayersScores";

const CountriesScores = (props) => {
  return (
    <div>
      {props.results.map((country) => (
        <table className="table table-bordered table-hover table-w">
          <thead class="thead-dark">
            <tr>
              <th colspan="2">High Scores: {country.name}</th>
            </tr>
          </thead>
          <PlayersScores results={country.scores} />
        </table>
      ))}
    </div>
  );
};

export default CountriesScores;
