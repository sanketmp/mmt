import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../../context/authcontext.jsx";
//import "../login/login.css";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <div style={{ marginBottom: "30px" }}>
          &lt;&nbsp;
          <Link style={{ textDecoration: "none" }} to="/">
            Back
          </Link>
        </div>
        <span style={{ textAlign: "center", fontSize: "20px" }}>
          List your propertyy
        </span>
        <input
          type="text"
          placeholder="Enter admin username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Enter admin password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login as Admin
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default AdminLogin;
