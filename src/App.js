import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume/resume';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

       </Switch>
    </Router>
  );
}

export default App;
