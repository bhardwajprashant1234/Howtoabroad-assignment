import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProgramList from '../components/ProgramList';
import '../styles/SearchCourse.css';

function SearchCourse() {
  const [filters, setFilters] = useState({
    universityName: '',
    courseName: '',
    ranking: '',
    courseType: '',
    language: '',
    semester: '',
    duration: '',
    fee: 20000,
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="search-course-container">
      <Sidebar handleFilterChange={handleFilterChange} filters={filters} />
      <ProgramList filters={filters} />
    </div>
  );
}

export default SearchCourse;