import React, { Component } from 'react';
import SideNavBar from './components/SideNavBar'
import EmployeeContainer from './containers/EmployeeContainer'
import ApplicantContainer from './containers/ApplicantContainer'
import './App.css';

class App extends Component {

  state={
    employees: [],
    employeesCopy: [],
    peopleApplied: [],
    peopleAppliedCopy: []
  }

  componentDidMount() {
    fetch('http://localhost:3001/mcdonalds_payroll')
    .then(res => res.json())
    .then(allEmployees =>{
      this.setState({employees: allEmployees, employeesCopy: allEmployees})
    })

    fetch('http://localhost:3001/people_applied')
    .then(res=>res.json())
    .then(allApplied=>this.setState({
      peopleApplied: allApplied,
      peopleAppliedCopy: allApplied
    }))

  }

  isHired=(e,person)=>{
    fetch("http://localhost:3001/mcdonalds_payroll", {method: "POST",
    head:
    { "Accept":'application/json',
      "Content-Type":"application/json"
    },body:JSON.stringify({"first_name": person.first_name, "last_name": person.last_name, "email": person.email, "sex":   person.sex,image: person.image, "ip_address": person.ip_address})

  })

  fetch(`http://localhost:3001/people_applied/${person.id}`,{method: "DELETE"})
  }

  handleChange=(e)=>{
   if(e.target.className === "byName"){
      this.filterEmployeesByName(e.target.value)
    }else if(e.target.className === "bySalary"){
      this.filterEmployeesBySalary(e.target.value)
    }else if(e.target.className === "applicantName"){
      this.filterApplicantByName(e.target.value)
    }
  }
  filterEmployeesByName=(name)=>{
  let newArr = this.state.employeesCopy.filter(emp =>{
      return emp.first_name.includes(name)
    })
    this.setState({
      employees: newArr
    })
  }

  filterEmployeesBySalary(email){
    let newArr = this.state.employeesCopy.filter(emp =>{
      return emp.email.includes(email)
    })
    this.setState({
      employees: newArr
    })

  }

  filterApplicantByName(name){
    let newArr=this.state.peopleAppliedCopy.filter(people=>{
      return people.first_name.includes(name)
    })
    this.setState({
      peopleApplied: newArr
    })
  }

  render() {
    return (
      <div>

      <div className="row">
        <div className="column"><SideNavBar handleChange={this.handleChange}/></div>
        <div className="column flex-container">
        <EmployeeContainer employeesCopy={this.state.employees}/>
        <ApplicantContainer peopleApplied={this.state.peopleApplied} isHired={this.isHired}/>
        </div>

      </div>


      </div>
    );
  }
}

export default App;
