import React from 'react';
import '../App.css'

const Employee = ({employee}) => (


  <div>
    <div className="applied">
      <button>Fire Employee</button><br></br>
      <img src={employee.image} className="imageSize" alt=""/>
      <h4>{employee.first_name} {employee.last_name}</h4>
    </div>
  </div>
);

export default Employee;
