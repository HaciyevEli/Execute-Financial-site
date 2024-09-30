import React from 'react'
import user1 from './images/user1.jpeg'
import user2 from './images/user2.jpeg'
import user3 from './images/user3.jpeg'
import './Testimonials.css'

const Testimonials = () => {
	return (
		<div className='testimonials'id='testi'>
			<div className='container'>
				<h2>Testimonials</h2>
				<span className='line'></span>
				<div className='content'>
					<div className='card'>
						<img src={user1} alt='Johnson.M.J.' />
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Laudantium sed eaque voluptatibus incidunt iste, perspiciatis
							minima cumque in adipisci fugiat dolor accusamus, consequatur
							recusandae dolores ducimus, voluptatem ab. Distinctio,
							consectetur.
						</p>
						<p>
							<span>Johnson.M.J.</span>
						</p>
						<p>Director of 'Financial Times'</p>
					</div>
					<div className='card'>
						<img src={user2} alt='Carol Harper' />
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Laudantium sed eaque voluptatibus incidunt iste, perspiciatis
							minima cumque in adipisci fugiat dolor accusamus, consequatur
							recusandae dolores ducimus, voluptatem ab. Distinctio,
							consectetur.
						</p>
						<p>
							<span>Carol Harper</span>
						</p>
						<p>Director at Risktec Solutions Ltd</p>
					</div>
					<div className='card'>
						<img src={user3} alt='Snow.J.R' />
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Laudantium sed eaque voluptatibus incidunt iste, perspiciatis
							minima cumque in adipisci fugiat dolor accusamus, consequatur
							recusandae dolores ducimus, voluptatem ab. Distinctio,
							consectetur.
						</p>
						<p>
							<span>Snow.J.R</span>
						</p>
						<p>Managing Director of BPW Global</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
