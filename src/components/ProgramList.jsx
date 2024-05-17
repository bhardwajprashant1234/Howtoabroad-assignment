import React, { useState } from 'react';
import '../styles/ProgramList.css';

function ProgramList({ filters }) {
  const [programs] = useState([
    {
      id: 1,
      name: 'Computer Science',
      university: 'University of XYZ',
      ranking: 5,
      type: 'Bachelor',
      language: 'English',
      semester: 'Fall',
      duration: '4 years',
      fee: 10000,
    },
    {
      id: 2,
      name: 'Business Administration',
      university: 'ABC University',
      ranking: 3,
      type: 'Master',
      language: 'German',
      semester: 'Spring',
      duration: '2 years',
      fee: 8000,
    },
    
    {
      id: 3,
      name: 'Master of Music (M.Mus)',
      university: 'University of Music and Performing Arts Munich',
      ranking: 7453,
      type: 'Master',
      language: 'German',
      semester: 'Winter',
      duration: '4 Years',
      fee: 6000,
    },
    {
      id: 4,
      name: 'Bachelor of Music (B.Mus)',
      university: 'University of Music and Performing Arts Munich',
      ranking: 7453,
      type: 'Bachelor',
      language: 'German',
      semester: 'Winter',
      duration: '3 years',
      fee: 9000,
    },
    {
      id: 5,
      name: 'Master of Business Administration (MBA)',
      university: 'Johannes Gutenberg University of Mainz',
      ranking: 219,
      type: 'Master',
      language: 'English',
      semester: 'Summer',
      duration: '4 Semesters',
      fee: 3300,
    },
    {
      id: 6,
      name: 'Master of Business Administration (MBA)',
      university: 'Johannes Gutenberg University of Mainz',
      ranking: 219,
      type: 'Master',
      language: 'English',
      semester: 'Summer',
      duration: '4 Semesters',
      fee: 3300,
    },
    {
      id: 7,
      name: 'Master of Education (M.Ed) - teaching at primary schools',
      university: 'University of Hildesheim',
      ranking: 1779,
      type: 'Masters',
      language: 'German',
      semester: 'Winter, Summer',
      duration: '4 Years',
      fee: 5500,
    },
    {
      id: 8,
      name: 'Master of Education (M.Ed) - teaching at secondary level',
      university: 'University of Hildesheim',
      ranking: 1779,
      type: 'Masters',
      language: 'German',
      semester: 'Winter, Summer',
      duration: '5 Years',
      fee: 6620,
    },
    {
      id: 9,
      name: 'World Consulting and Business Development (M.A.)',
      university: 'University of Bremen',
      ranking: 373,
      type: 'Masters',
      language: 'German',
      semester: 'Winter',
      duration: '3 Years',
      fee: 7720,
    },
    
    
    // Add more programs as needed
  ]);
  const filteredPrograms = programs.filter((program) => {

    const {
      universityName,
      courseName,
      ranking,
      courseType,
      language,
      semester,
      duration,
      fee,
    } = filters;

    return (
      program.university.toLowerCase().includes(universityName.toLowerCase()) &&
      program.name.toLowerCase().includes(courseName.toLowerCase()) &&
      (ranking === '' || program.ranking === parseInt(ranking)) &&
      (courseType === '' || program.type.toLowerCase() === courseType.toLowerCase()) &&
      (language === '' || program.language.toLowerCase() === language.toLowerCase()) &&
      (semester === '' || program.semester.toLowerCase() === semester.toLowerCase()) &&
      (duration === '' || program.duration === duration) &&
      program.fee <= fee
    );
  });

  return (
    <div className="program-list">
      <h2>Available Programs</h2>
      <ul>
        {filteredPrograms.map((program) => (
          <li key={program.id}>
            <h3>{program.name}</h3>
            <p>University: {program.university}</p>
            <p>Ranking: {program.ranking}</p>
            <p>Type: {program.type}</p>
            <p>Language: {program.language}</p>
            <p>Semester: {program.semester}</p>
            <p>Duration: {program.duration}</p>
            <p>Tuition Fee: {program.fee}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProgramList;
