import React from 'react'
import './App.css'

function Courses({course}) {
  const {title, description, instructor, price, link, image} = course
  return (
    <div>
      <div className="course">
        <img src={image} alt="course" className='images' />
        <div className="course-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>Instructor: {instructor}</p>
          <p>Price: ${price}</p>
          <a href={link} target="_blank" rel="noreferrer">Enroll Now</a>
        </div>
      </div>
    </div>
  )
}

export default Courses