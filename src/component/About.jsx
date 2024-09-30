import React from 'react'
import john from './images/john-doe.png'
import './About.css'

const About = () => {
  return (
    <div className='about' id="about">
      <div className="container">
        <img src={john} alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>Intense is an International Financial Planning company with offices in multiple jurisdictions over the world Working with intense gives me the ability to advise internat ional expatriales living in the middle east from where i live in USA</p>
          <p>
            I`m John Doe, a senior for advisor independently owned financial planning company called intense.
          </p>
          <button className="button">EXPLORE MORE</button>
        </div>
      </div>

    </div>
  )
}

export default About