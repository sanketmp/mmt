import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/authcontext.jsx";
import "./addyourproperty.css"


const CustomRadioButton = ({ label, selected, onSelect }) => (
  <li>
    <button
      style={{
        ...styles.radioButton,
        ...(selected ? styles.selected : {}),
      }}
      onClick={onSelect}
    >
      {label}
    </button>
  </li>
);

const addyourproperty = () => {
  return (
    <div className="login">
      <div className="lContainer">
        <div style={{ marginBottom: "30px" }}>
          &lt;&nbsp;
          <Link style={{ textDecoration: "none" }} to="/">
            Back
          </Link>
        </div>
        <span style={{ textAlign: "center", fontSize: "30px" }}>
          Enter Details
        </span>
        <input
          type="text"
          placeholder="Enter Hotel name"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="Enter password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
        <span>
          Don't have account?&nbsp;
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#eb2226" }}
          >
            Signup
          </Link>
          &nbsp;here.
        </span>
      </div>
    </div>
  );
};

export default addyourproperty;
