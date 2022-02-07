import {Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import {projects as Projects} from './components/Projects'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import SupportEngine from './components/SupportEngine/SupportEngine';
import 'bootstrap/dist/css/bootstrap.min.css'



class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <Navbar/>
        
        <Switch>
          <Route exact path ='/'>  
            <Home/>
            <SupportEngine/>
          </Route>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/contact' component={Contact}/>
          
        </Switch>
      </div>
    );

  }
  
}

export default App;
