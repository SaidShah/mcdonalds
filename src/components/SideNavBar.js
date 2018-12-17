import React from 'react';
import '../App.css'

const SideNavBar = ({props}) => (
<div>
  <div className="sidenav">
    <h2 className="sidebar">Filter Employees and Applicants</h2>
    <input placeholder="All Employees" className="inputsBox"></input>
    <input placeholder="All Applicants" className="inputsBox"></input>
    <input placeholder="Employee by name" className="inputsBox"></input>
    <input placeholder="Employee by salary" className="inputsBox"></input>
    <input placeholder="Applicant by name" className="inputsBox"></input>
  </div>
</div>
);
export default SideNavBar;
