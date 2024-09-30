import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Testimonials from './component/Testimonials'
import Demo from './component/Demo'
import Footer from './component/Footer'
function App() {
	return (
		<div>
			<Navbar />
			<Hero/>
			<About/>
			<Testimonials/>
			<Demo/>
			<Footer/>
		</div>
	)
}

export default App
