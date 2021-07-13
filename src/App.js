import React, { useState, useEffect } from "react";
import Navigate from "./components/Navbar";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Spinner } from "react-bootstrap";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
  }, []);

  console.log("people data ", people);

  return (
    <div className="App">
      <Router>
        <Navigate />
        <Container>
          {loading ? (
            <div style={{marginTop: "180px"}}>
              <Spinner animation="border" role="status" />
              <p>Loading ...</p>
            </div>
          ) : (
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/people">
                <People data={people} />
              </Route>
              <Route exact path="/planets">
                <Planets data={planets} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </div>
  );
}

export default App;
