import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removefromWatchList } from '../redux/watchlistSlice';
import { FiTrash } from "react-icons/fi";
import GuestCard from './guestcard';

const SidePanel = () => {
    const watchlist = useSelector((state) => state.watchlist.watchlist);
    const dispatch = useDispatch();
    console.log('watchlist', watchlist);

    const handleRemoveFromWatchlist = (movie) => {
        dispatch(removefromWatchList(movie));
    };

    return (
        <>
        <div className="side-panel-container">
            <h1 style={{ color: 'red' }}>Watchlist</h1>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {watchlist && watchlist.length > 0 ? (
                        watchlist.map((movie, index) => (
                            <li key={index} className="list-group-item">
                                {movie}
                                <button
                                    className="btn btn-sm btn-danger"
                                    style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                                    onClick={() => handleRemoveFromWatchlist(movie)}
                                >
                                    <FiTrash />
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="list-group-item">Watchlist is empty</li>
                    )}
                </ul>
            </div>
            <div className="guest-card-container">
            <GuestCard />
            </div>
            </div>
        </>
    );
}

export default SidePanel;
