import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";

const Gallery = ({ title, query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=your-api-key&s=${query}`
        );
        setMovies(response.data.Search);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies...</div>;

  return (
    <div className="gallery">
      <h2>{title}</h2>
      <div className="movies">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
