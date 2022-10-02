import React from 'react'
import { useEffect, useState } from "react";
import MovieCard from '../../components/movie-card/MovieCard';
import '../home/Home.css'
import '../../shared/MovieGrid.css'

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`;

    getTopRatedMovies(topRatedUrl);

  }, []);


  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    
    setTopMovies(data.results);
  };


  console.log(topMovies);
  
  return (
    <div id="home" className="container">
      <h1>Top 20 - Melhores Filmes</h1>
      <div className='movies-container'>
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies !== null && topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} /> )}
      </div>
    </div>
  )
}

export default home