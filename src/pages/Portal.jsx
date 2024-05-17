import React from 'react';

function Portal() {
  return (
    <div>
      <h1>Welcome to the Portal</h1>
      <p>This is the portal page where you can access various features and services.</p>

      <div>
        <h2>Student Services</h2>
        <ul>
          <li>View and update your profile</li>
          <li>Check your grades and transcripts</li>
          <li>Register for courses</li>
          <li>Pay tuition fees</li>
        </ul>
      </div>

      <div>
        <h2>Faculty Services</h2>
        <ul>
          <li>Manage course materials</li>
          <li>Submit grades</li>
          <li>View class rosters</li>
          <li>Request resources</li>
        </ul>
      </div>

      <div>
        <h2>Administrative Services</h2>
        <ul>
          <li>Manage student records</li>
          <li>Process admissions</li>
          <li>Generate reports</li>
          <li>Handle financial transactions</li>
        </ul>
      </div>
    </div>
  );
}

export default Portal;