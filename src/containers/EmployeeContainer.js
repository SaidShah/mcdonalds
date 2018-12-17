import React, { Component } from 'react';
import Employee from '../components/Employee'
import '../App.css'

class EmployeeContainer extends Component {

  state={
    employees: [],
    employeesCopy: [],
    isHired: true
  }

  componentDidMount() {
    fetch('http://localhost:3001/mcdonalds_payroll')
    .then(res => res.json())
    .then(allEmployees =>{
      this.setState({employees: allEmployees, employeesCopy: allEmployees})
    })
  }

  render() {

    let allEmployees = this.state.employeesCopy.map(eachEmployee =>{
      return <Employee employee={eachEmployee} hired={this.state.isHired} key={eachEmployee.id}/>
    })

    return (
      <div>
        <div className="row">
          {allEmployees}
        </div>
      </div>
    );
  }

}

export default EmployeeContainer;
