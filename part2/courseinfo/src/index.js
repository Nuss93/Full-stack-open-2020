import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((prev,current) => prev + current.exercises, 0)

  return(
    <p className="font-weight-bold">Number of exercises {sum}</p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  // console.log(course)
  return (
    <div>
      {course.parts.map((data,index) => <Part key={index} part={data} />)}
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <Course course={course} />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))