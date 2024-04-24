import React from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const GuestCard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="card mt-3">
      <div className="card-body d-flex align-items-center">
        <img
          src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
          alt="Guest"
          className="rounded-circle me-3"
          style={{ width: "50px", height: "50px" }}
        />
        <h5 className="card-title me-auto">Guest</h5>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={handleLogout}
          >
            <FiLogOut />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuestCard;
