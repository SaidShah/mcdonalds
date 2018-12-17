import React, { Component } from 'react';
import SideNavBar from './components/SideNavBar'
import EmployeeContainer from './containers/EmployeeContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

      <div className="row">
        <div className="column"><SideNavBar/></div>
        <div className="column flex-container"><EmployeeContainer/></div>
      </div>


      </div>
    );
  }
}

export default App;
