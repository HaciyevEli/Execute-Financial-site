import React from 'react'
import './Demo.css'

const Demo = () => {
  return (
    <div className='video' id='video'>
      <div className="container">
        <div className="col-1">
          <p>More Than 100 Financial Planners</p>
          <p>One Philosophy</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi rerum fugiat. Quisquam eveniet ut, veniam laboriosam ipsum a similique?</p>
          <button className="button">GET YOUR FREE FINANCIAL ANALYSIS</button>
        </div>
        <div className="col-2">
          <iframe width='570' height='320' src='https://www.youtube.com/embed/oeqP5JtihMA' title='Youtube video player'  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
        </div>
      </div>
    </div>
  )
}

export default Demo