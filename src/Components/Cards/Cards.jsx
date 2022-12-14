import React from 'react'
import './Cards.css'
import card1 from '../../assets/01.png'
import card2 from '../../assets/02.png'
import card3 from '../../assets/03.png'
const Cards = () => {

  return (
    <div className='wrapper' id='About'>
        <div className='card1' data-aos='fade-right'>
            <img src={card1} alt="Team Members" />
        <h3>School Students</h3>
        <p>New Education Policy did best to all, 
but we gonna make a happening
FUTURE for you.</p>
        </div>
        <div className='card2' data-aos="fade-up">
            <img src={card2} alt="Team Members" />
        <h3>College Students</h3>
        <p>No hurdles and restrictions on Course, Stream and College life, we are the stem of Interests.</p>
        </div>
        <div className='card3' data-aos="fade-left"> 
            <img src={card3} alt="Team Members" />
        <h3>Educators & Creators</h3>
        <p>You are important as an Educator or as Creator, the economy and YOU is same, and we are bridge for you.</p>
        </div>
    </div>
  )
}

export default Cards