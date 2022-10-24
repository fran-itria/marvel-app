import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar.js";
import Home from "./Components/Home/Home.js";
import Personajes from "./Components/Personajes/Personajes.js";
import Comics from "./Components/Comics/Comics.js";
import Series from "./Components/Series/Series.js";
import ComicsCharacters from "./Components/ComicsCharacters/ComicsCharcter";
import ComicDetail from "./Components/ComicsDetail/ComicDetail.js";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />
        <div style={{ flexGrow: 1 }}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/personajes">
              <Personajes />
            </Route>
            <Route path="/comics">
              <Comics />
            </Route>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/personaje/:id/comics" component={ComicsCharacters} />
            <Route path="/comic/:id/detail" component={ComicDetail} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
