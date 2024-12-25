import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Navbar from "./components/Navbar";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/skill" component={Skill} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
