import React from 'react'
import Course from './course'

const App = () => {
  const courses = {
      name: 'Half Stack application development',
      parts: [
      {
        name:  'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name:  'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name:  'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
}

export default App;
