import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./components/Data.js";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const r = await axios.get(
        "https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2023-05-10&end_date=2023-05-27"
      );
      setData(r.data);
      console.log("dados:", r.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <div>
          <Data
            latitude={data?.latitude}
            longitude={data?.longitude}
            timezone={data?.timezone}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
