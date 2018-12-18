import React, {Component} from 'react';

class Applicant extends Component {



render(){
  return(
  <tbody>
    <tr>
      <td>{this.props.applicant.first_name} {this.props.applicant.last_name}</td>
      <td>{this.props.applicant.email}</td>
      <td>{this.props.applicant.sex}</td>
      <td>{<input type="checkbox" label="hire" name="hired" onChange={(e)=>this.props.isHired(e,this.props.applicant)}/>}<span>Hire </span></td>
    </tr>
  </tbody>
  )
  }
}
export default Applicant;
