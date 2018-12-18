import React, { Component } from 'react';
import Applicant from '../components/Applicant'

class ApplicantContainer extends Component {


  render() {
    let allApplicants = this.props.peopleApplied.map(eachPerson =>{
      return <Applicant applicant={eachPerson} key={eachPerson.id} isHired={this.props.isHired}/>
    })

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Sex</th>
              <th>Hire</th>
            </tr>
          </thead>
          {allApplicants}
        </table>
      </div>
    );
  }

}

export default ApplicantContainer;
