// import logo from "./logo.svg";
import "./App.css";
import Heading from "./Heading";
import CountriesScores from "./CountriesScores";

import allCountryScores from "./scores";

function App() {
  return (
    <div className="App">
      <Heading />
      <CountriesScores results={allCountryScores} />
    </div>
  );
}

export default App;
