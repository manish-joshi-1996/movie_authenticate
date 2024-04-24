import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes instead of BrowserRouter
import Login from './components/login';
import Signup from './components/signup';
import SearchPage from './components/searchPage';
import MovieDetails from './components/movieDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/search" element={<SearchPage />} /> 
          <Route path="/movie/:imdbID" element={<MovieDetails />}/>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
