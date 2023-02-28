import "./App.css";
import Heading from "./Heading";
import CountriesScores from "./CountriesScores";
import allCountryScores from "./scores";
import WorldWide from "./World-wide";
import SortButton from "./SortButton";
import { useState } from "react";

function App() {
  const [sortValue, setSort] = useState(1);

  function sorter() {
    setSort(-sortValue);
  }

  return (
    <div className="App">
      <Heading />
      <SortButton
        handleClick={sorter}
        text={sortValue < 0 ? "Ascending" : "Descending"}
      />
      <WorldWide results={allCountryScores} sortValue={sortValue} />
      <CountriesScores results={allCountryScores} sortValue={sortValue} />
    </div>
  );
}

export default App;
