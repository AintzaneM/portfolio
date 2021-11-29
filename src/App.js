import {Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import {projects as Projects} from './components/Projects'
import Navbar from './components/Navbar';
import ProjectDetails from './components/ProjectDetails';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/projects/:id' component={ProjectDetails}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </div>
    );

  }
  
}

export default App;
