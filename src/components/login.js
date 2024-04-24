import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRepeat } from 'react-icons/bs';
import { toast } from 'react-toastify';
const  Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    // navigate(`/product/123`);
    setIsLoading(true);
    setTimeout(() => {
        setIsLoading(false);
        navigate('/search')
        toast.success(`Logged In Successfully!`, {
            position: 'top-right',
            autoClose: 2500,
            closeOnClick: true
          });
    }, 2000);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Log In</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address<span className="error">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary d-block mx-auto"
                  onClick={handleLogin}
                  disabled={isLoading || !email}
                >
                  {isLoading ? 'Loading...' : 'Log In'}
                </button>
                <p className="mt-3 text-center">Don't have an account? <Link to="/signup">Sign Up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;