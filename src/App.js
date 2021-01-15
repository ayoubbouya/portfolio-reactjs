import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Resume from './pages/resume/resume';
import Services from './pages/services';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/services" component={Services} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />

       </Switch>
    </Router>
  );
}

export default App;
