import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from './images/logo.png'

import './Navbar.css'

const Navbar = () => {
	const [click, setClick] = useState(false)
	const closeMenu = () => setClick(false)

	const handleClick = () => setClick(!click)

	return (
		<div className='header' id='header'>
			<div className='navbar'>
				<a href='/' className='logo'>
					<img src={logo} alt='Excecute Finacial Advising' />
				</a>
				<div className='burger' onClick={handleClick}>
					{click ? (
						<FaTimes size={30} style={{ color: '#fff' }} />
					) : (
						<FaBars size={30} style={{ color: '#fff' }} />
					)}
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<a href='#header'onClick={closeMenu}>Home</a>
					</li>
					<li className='nav-item'>
						<a href='#about'onClick={closeMenu}>About</a>
					</li>
					<li className='nav-item'>
						<a href='#testi'onClick={closeMenu}>Testimonials</a>
					</li>
					<li className='nav-item'>
						<a href='#video'onClick={closeMenu}>Demo</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar
