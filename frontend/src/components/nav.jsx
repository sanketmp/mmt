import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext.jsx";
import axios from "axios";
import "./nav.css";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handlelogout = (ev) => {
    ev.preventDefault();
    axios.post("/auth/logout");
    dispatch({ type: "LOGOUT" });
    navigate("/");
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
          <div className="dropdown">
            <button className="dropbtn">{user.username}</button>
            <div className="dropdown-content">
              <Link to="/myaccount">
                <p>My Bookings</p>
              </Link>
              <p onClick={handlelogout}>Logout</p>
            </div>
          </div>
        ) : (
          <div className="navItems">
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
