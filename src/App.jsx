import React from 'react';
import './App.css';

function App() {
  // Define the students array
  const students = [
    {
      name: 'Yash',
      age: 28,
      grades: [50, 80, 70]
    },
    {
      name: 'Dhurba',
      age: 30,
      grades: [64, 84, 74]
    },
    {
      name: 'Nitesh',
      age: 25,
      grades: [62, 45, 80]
    }
  ];

  // Function to calculate average grade
  const calculateAverageGrade = (student) => {
    const sum = student.grades.reduce((total, grade) => total + grade);
    return sum / student.grades.length;
  };

  // Function to print student information
  const printStudentInfo = (student) => {
    console.log('Name:', student.name);
    console.log('Age:', student.age);
    console.log('Average Grade:', calculateAverageGrade(student));
  };
  students.forEach(printStudentInfo);
  return (
    <div className="book">
      <div className="cover">
        <h1 className="title">Student Information</h1>
      </div>
      <div className="pages">
        {students.map((student, index) => (
          <div key={index} className="page">
            <h2 className="student-name">{student.name}</h2>
            <p className="student-info">Age: {student.age}</p>
            <p className="student-info">Average Grade: {calculateAverageGrade(student)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
