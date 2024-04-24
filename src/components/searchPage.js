import React, { useState } from 'react';
import SidePanel from './sidePanel';
import SearchResults from './searchResults';
import { FiCommand } from "react-icons/fi";

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        fetchData();
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}?apiKey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}`);
            const data = await response.json();
            if(data.Response === 'True'){
                setSearchResults(data.Search);
            } else {
                setSearchResults([]);
            }
            console.log(searchResults);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2" style={{border: "1px solid #c9bdbd", height: "100vh"}}>
                    <SidePanel /> 
                </div>
                <div className="col-md-10">
                    <form onSubmit={handleSearchSubmit} className="mb-3 mt-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for movies..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <button type="submit" className="btn btn-danger">Search</button>
                        </div>
                    </form>
                    {loading ? (
                      <div className="loading-container">
                        <FiCommand className="loading-icon" />
                        </div>
                    ) : (
                        <SearchResults results={searchResults}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
