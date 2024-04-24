import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addToWatchList } from '../redux/watchlistSlice';
import { useDispatch } from 'react-redux';

const SearchResults = ({results}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    console.log(results);
    const dispatch = useDispatch();

   const handleAddToWatchlist = (movie) => {
    dispatch(addToWatchList(movie));
   }

   if (results.length === 0) {
    return (
    <><div className="text-center mt-5">Browse Movies, add them to Watchlist and many more!</div><div className="text-center mt-5">Click on + icon. to add movies on your watchlist.</div></>
    )
    ;
  }

    return (
        <div className="row">
          {
          results.map((movie, index) => (
            <div key={movie.imdbID} className="col-md-3 mb-3">
                 <Link to={`/movie/${movie.imdbID}`} className="text-decoration-none">
                 <div
              className="card h-100 position-relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="card h-100">
      <img src={movie.Poster} className="card-img-top" style={{ objectFit: 'cover', height: '200px' }} alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">Year: {movie.Year}</p>
      </div>
    </div>
    {hoveredIndex === index && (
                <button type="button" className="btn btn-primary btn-floating"
                  style={{ position: 'absolute', top: '5px', right: '5px' }}
                  onClick={(event) => {
                    event.preventDefault();
                    handleAddToWatchlist(movie.Title) 
                  }}
                >
                  +
                </button>
              )}
            </div>
    </Link>
            </div>
          ))
          }
        </div>
      );
};

export default SearchResults;