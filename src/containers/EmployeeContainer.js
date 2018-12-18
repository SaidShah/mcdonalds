import React, { Component } from 'react';
import Employee from '../components/Employee'
import '../App.css'

class EmployeeContainer extends Component {


  render() {

    let allEmployees = this.props.employeesCopy.map(eachEmployee =>{
      return <Employee employee={eachEmployee} key={eachEmployee.id}/>
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
