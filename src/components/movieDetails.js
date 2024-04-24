import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SidePanel from "./sidePanel";

const MovieDetails = () => {
    const { imdbID } = useParams();
    const [movie, setMovieDetails] = useState({});
    const navigate = useNavigate();

    const handleGoBack = () => {
       navigate("/search");
  };

    useEffect(() => {
        const fetchDetails = async () => {
            try {
              const response = await fetch(`${process.env.REACT_APP_API_URL}?apiKey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`);
              const data = await response.json();
              setMovieDetails(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
            finally {
          }
          };
          fetchDetails();
    }, [imdbID]);

    
   
    return (
        <div className="container-fluid">
      <div className="row">
        <div className="col-md-2" style={{border: "1px solid #c9bdbd", height: "100vh"}}>
          <SidePanel /> 
        </div>
        
          <div className="col-md-10">
        <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <img src={movie.Poster} className="img-fluid mb-3" alt={movie.Title} />
        </div>
        <div className="col-md-8">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Rated:</strong> {movie.Rated}</p>
          <p><strong>Released:</strong> {movie.Released}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Writer:</strong> {movie.Writer}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>Language:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>IMDB Votes:</strong> {movie.imdbVotes}</p>
          <button className="btn btn-primary" onClick={handleGoBack}>Back to Search</button>
        </div>
      </div>
        </div>
          
        
      </div>
    </div>
    )
};

export default MovieDetails;