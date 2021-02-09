import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './../src/components/pages/Home/Home';
import Teams from './../src/components/pages/Teams/Teams';
import Club from './../src/components/pages/Club/Club';
import Contact from './../src/components/pages/Contact/Contact';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/teams"><Teams/></Route>
          <Route path="/club"><Club/></Route>
          <Route path="/contact"><Contact/></Route>
        </Switch>
    </Router>
  );
}

export default App;
