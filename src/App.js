import React, {Component} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

class App extends Component {
  render(){
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="column"><NavBar /></div>
        </div>
      </div>      
    </React.Fragment>
  );
}
}

export default App;