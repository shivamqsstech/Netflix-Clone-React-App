import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import cards_data  from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({title,category}) => {

  const [apiData , setApiData] = useState([]);
  const cardsRef = useRef();


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWM5ZjNhYTNlZmRiMjYxNDA4MzRmNGRkMjIyMDRhYyIsIm5iZiI6MTczNTcwNjMyMS40NTcsInN1YiI6IjY3NzRjNmQxZTljYWMwN2VjNDEzMDA4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XEk7JBFLJRFA6GpkwWo205tgdJaNTmB3bIjHxwtZBTs'
    }
  };
  


//below codes

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{


    fetch(`https://api.themoviedb.org/3/movie/${category?category:""}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results || []))
    .catch(err => console.error(err));


    // Attach wheel event listener
    const refCurrent = cardsRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('wheel', handleWheel);
    }

    // Cleanup event listener on unmount
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener('wheel', handleWheel);
      }
    };
    
    
    // cardsRef.current.addEventListener('wheel',handleWheel);
  }, []);


  return (
    <div className='title-cards'>

      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">

        {
          apiData.map((card, index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index} ref={cardsRef}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>


            </Link>
          })
        }

      </div>

    </div>
  )
}

export default TitleCards;