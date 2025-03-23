import React, { useEffect, useState } from "react";
import "./playerPage.css";
import { Link, useNavigate, useParams } from "react-router";

function PlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTkwMjliYTBhMGVjYmE3Y2EwNjg5MzE0NGVkZDc1NyIsIm5iZiI6MTcwMzg5Njg4Mi44MjQsInN1YiI6IjY1OGY2NzMyMGQyZjUzNWUyNWQzYzE4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I7x9cnm9c8BeQd8Ai5AWQfy8NKQ6TqLmc20eXfluLEY",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  

  return (
    <div className="player">
      <img src="/arrow-back.svg" alt="" width={100} onClick={()=> {navigate(-2)}} />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="Marvel Studios&#39; Avengers: Infinity War Official Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default PlayerPage;
