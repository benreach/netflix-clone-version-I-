import React, { useEffect, useRef, useState } from "react";
import "./cardLists.css";
import { movies } from "../../../utils";
import { Link } from "react-router";


function CardLists({title,category}) {
const [apiData,setApiData] = useState([]);

  const scrollRef = useRef();

  const handleWheel = (event)=> {
    event.preventDefault();
    scrollRef.current.scrollLeft += event.deltaY
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTkwMjliYTBhMGVjYmE3Y2EwNjg5MzE0NGVkZDc1NyIsIm5iZiI6MTcwMzg5Njg4Mi44MjQsInN1YiI6IjY1OGY2NzMyMGQyZjUzNWUyNWQzYzE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I7x9cnm9c8BeQd8Ai5AWQfy8NKQ6TqLmc20eXfluLEY'
    }
  };
  
  useEffect(()=> {
    const currentRef = scrollRef.current;
    currentRef.addEventListener("wheel",handleWheel)


    fetch(`https://api.themoviedb.org/3/movie/${category ? category :"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    return () => {
      currentRef.removeEventListener("wheel",handleWheel)
    };

  },[])

  return (
    <div className='cardLists'>
      <h1>{title?title:' Popular on Netflix'}</h1>
      <div className='cards' ref={scrollRef}>
        {
          apiData.map(movie => (
            <Link to={`/player/${movie.id}`} key={movie.id} className='card'>
              <img src={`https://image.tmdb.org/t/p/w500`+movie.backdrop_path} alt="" width={300}/>
              <p>{movie.original_title}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default CardLists