import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log (props)
  return ( 
  <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
      <Part parts={props.parts[3]} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
    <p> Amount of Exercises {props.parts[1].exercises + props.parts[2].exercises + props.parts[3].exercises} </p>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p> {props.parts} {props.parts.exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts : [ 
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
      }
    ]
  }

   return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}  />
      <Total parts= {course.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
