import React from 'react'

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

const Course = ({ courses }) => {
    console.log(courses);
    return courses.map(data => (
        <div key={data.id} className="mb-4">
            <Header course={data} />
            <Content course={data} />
            <Total course={data} />
        </div>
    ))
}

export default Course;