import React, { useEffect, useRef } from 'react'
import './Titlecard.css'
import cards_data from '../../../assests/cards/Cards_data'

const Titlecard = ({title, category}) => {

const cardRef = useRef();

const handlewheel = (event)=>{
  event.preventDefault();
  cardRef.current.scrollLeft += event.deltaY;
}

useEffect(() =>{
  cardRef.current.addEventListener('wheel', handlewheel);
},[])

  return (
    <div className='title-card'>
      <h2> {title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {cards_data.map((card, index)=>{
            return <div className="card" key={index}>
                <img src={card.image} alt="" />
                <p>{card.name}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default Titlecard
