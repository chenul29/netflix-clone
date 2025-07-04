import React, { useEffect, useState } from 'react'
import '../Player/Player.css'
import back_arrow_icon from '../../assests/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

const {id} = useParams();
const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBhODg1YjI3ZGFhNjVjN2E3ZjdhZjFhZTM5NDMyMyIsIm5iZiI6MTc1MDUxNjkxOS41OTIsInN1YiI6IjY4NTZjNGI3MGI4M2JkNzY3M2ZjNzRlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tC7POFeN9-DIugFUOKL-eCxZzNvqk1l5XuSVQesxotI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0])) 
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={()=>{navigate(-2)}} />
      <iframe
        width='90%'
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        title='trailer'
        frameBorder='0'
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p> 
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
