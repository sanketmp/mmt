import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext.jsx";
import "./nav.css";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleAdminLogin = () => {
    navigate("/loginadmin");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span>
          <Link to="/">
            <img
              className="logo"
              src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
              alt=""
            />
          </Link>
        </span>
        {user ? (
          <button className="usernavButton">{user.username}</button>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleAdminLogin}>
              List your property
            </button>
            <button className="navButton" onClick={handleLogin}>
              Log in / Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
