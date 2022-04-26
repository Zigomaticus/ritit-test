// Libraries
import axios from "axios";
import React, { useEffect, useState } from "react";
// Css
import "./App.scss";

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/planets")
      .then(({ data }) => setPlanets(data.results));
  }, []);

  return (
    <div className="App">
      <div className="header">Star wars: Planets</div>
      <div className="content">
        {planets.map((planet) => (
          <div className="planet">
            <div className="planet__name">Имя планеты: {planet.name}</div>
            <div className="planet__gravity">Гравитация: {planet.gravity}</div>
            <div className="planet__climate">Климат: {planet.climate}</div>
            <div className="planet__population">
              Популяция: {planet.population}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
