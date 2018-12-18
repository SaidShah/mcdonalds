import React from 'react';
import '../App.css'

const SideNavBar = ({props, handleChange}) => (
<div>
  <div className="sidenav">
    <h2 className="sidebar">Filter Employees and Applicants</h2>
    <input placeholder="Employee by name" className="byName" onChange={handleChange}></input>
    <input placeholder="Employee by email" className="bySalary" onChange={handleChange}></input>
    <input placeholder="Applicant by name" className="applicantName" onChange={handleChange}></input>
  </div>
</div>
);
export default SideNavBar;
