import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData , setApiData] = useState({
    name : "",
    key: "",
    published_at: "",
    type: ""



  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWM5ZjNhYTNlZmRiMjYxNDA4MzRmNGRkMjIyMDRhYyIsIm5iZiI6MTczNTcwNjMyMS40NTcsInN1YiI6IjY3NzRjNmQxZTljYWMwN2VjNDEzMDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEk7JBFLJRFA6GpkwWo205tgdJaNTmB3bIjHxwtZBTs'
    }
  };

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));


  },[] )
  

  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={() => {
    if (window.history.length > 2) {
      navigate(-2);
    } else {
      navigate('/');
    }
  }}   />
      <iframe width='90%'  height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" allowFullScreen title='trailer'></iframe>

      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>

      </div>



    </div>
  )
}

export default Player;