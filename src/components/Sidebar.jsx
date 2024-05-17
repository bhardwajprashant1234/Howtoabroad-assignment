import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ handleFilterChange, filters }) {
  return (
    <div className="sidebar">
      <h2>Filters</h2>
      <div>
        <label>
          University Name:
          <input
            type="text"
            name="universityName"
            value={filters.universityName}
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div>
        <label>
          Course Name:
          <input
            type="text"
            name="courseName"
            onChange={handleFilterChange}
          />
        </label>
      </div>
      <div>
        <label>
          Germany Ranking:
          <select name="ranking" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Course Type:
          <select name="courseType" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Bachelor">Bachelor</option>
            <option value="Master">Master</option>
            <option value="Diploma">Diploma</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Teaching Language:
          <select name="language" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="English">English</option>
            <option value="German">German</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Beginning Semester:
          <select name="semester" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Duration:
          <select name="duration" onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="1 year">1 year</option>
            <option value="2 years">2 years</option>
            <option value="3 years">3 years</option>
            <option value="4 years">4 years</option>
          </select>
        </label>
      </div>
      <div>
  <label>
    Tuition Fee:
    <div>
      <span>0</span>
      <input
        type="range"
        name="fee"
        min="0"
        max="20000"
        step="1000"
        value={filters.fee}
        onChange={handleFilterChange}
      />
      <span>20000</span>
    </div>
  </label>
</div>
    </div>
  );
}

export default Sidebar;