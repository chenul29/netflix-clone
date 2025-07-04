import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import cards_data from '../../../assests/cards/Cards_data'
import { Link } from 'react-router-dom';

const Titlecard = ({title, category}) => {


const [apiData, setApiData] = useState([]);
const cardRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBhODg1YjI3ZGFhNjVjN2E3ZjdhZjFhZTM5NDMyMyIsIm5iZiI6MTc1MDUxNjkxOS41OTIsInN1YiI6IjY4NTZjNGI3MGI4M2JkNzY3M2ZjNzRlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tC7POFeN9-DIugFUOKL-eCxZzNvqk1l5XuSVQesxotI'
  }
};



const handlewheel = (event)=>{
  event.preventDefault();
  cardRef.current.scrollLeft += event.deltaY;
}

useEffect(() =>{


fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));


  cardRef.current.addEventListener('wheel', handlewheel);
},[])

  return (
    <div className='title-card'>
      <h2> {title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={'https://image.tmdb.org/t/p/w500' + card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
            </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecard
