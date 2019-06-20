import React from 'react'

const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

const Chapter = ({ chapter }) => {
  return (
    <li key={chapter.id}>{chapter.name} {chapter.exercises}</li>
  )
}

const CourseItem = ({ course }) => {
  let total = 0
  course.parts.map(c => total += c.exercises)
  return (
    <>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((c, i) => <div><Chapter chapter={course.parts[i]} /></div>)}
      </ul>
      <h3>Total of {total} exercises</h3>
    </>
  )
}


const Course = () => {
  return (
    <>
      <h1>Web development curriculum</h1>
      {courses.map((c, i) => <div><CourseItem course={courses[i]} /></div>)}
    </>
  )
}

export default Course