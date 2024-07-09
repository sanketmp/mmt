import "./myacc.css";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext.jsx";
import useFetch from "../hooks/useFetch";

// createdAt: "2024-07-07T09:37:54.546Z";
// email: "user1@user.co";
// updatedAt: "2024-07-07T09:37:54.546Z";
// username: "user1";
// __v: 0;
// _id: "668a61f2f7987459f0d26c11";

//let currentuser = JSON.parse(localStorage.getItem("UserDet"));

const MyAcc = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data, loading, error, reFetch } = useFetch(
    `/booking?person=${user.username}`
  );
  const handleClick = (ev) => {
    ev.preventDefault();
    axios.post("/auth/logout");
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <>
      <div className="login">
        <div className="Container">
          <div style={{ marginBottom: "30px" }}>
            &lt;&nbsp;
            <Link style={{ textDecoration: "none" }} to="/">
              Back
            </Link>
          </div>
          <span style={{ textAlign: "center", fontSize: "30px" }}>
            My Account
          </span>
          <span id="entity">Username: </span>
          <span>{user.username}</span>
          <p id="entity">Bookings:</p>
          {loading ? (
            "Loading Booking Details"
          ) : (
            <>
              {data &&
                data.map((bookdetails, index) => (
                  <div className="bookingdetail" key={index}>
                    {bookdetails.type === "H" && (
                      <>
                        <span id="details">Type(H/F): </span>
                        <span id="info">&emsp;&emsp;{bookdetails.type}</span>
                        <br />
                        <br />
                        <span id="info">
                          &emsp;&emsp;&emsp;@ {bookdetails.hotelname},&emsp;
                          {bookdetails.hotelcity}.
                        </span>
                        <br />
                        <br />
                      </>
                    )}
                    {bookdetails.type === "F" && (
                      <>
                        <span id="details">Type(H/F): </span>
                        <span id="info">&emsp;&emsp;{bookdetails.type}</span>
                        <br />
                        <br />
                        <span id="details">Airline: </span>
                        <span id="info">
                          &emsp;&emsp;&emsp;{bookdetails.airline}
                        </span>
                        <br />

                        <span id="details">From </span>
                        <span id="info">
                          &emsp;{bookdetails.flightfrom}&emsp;&emsp;
                        </span>
                        <span id="details">To </span>
                        <span id="info">&emsp;{bookdetails.flightto}</span>
                        <br />
                        <br />
                      </>
                    )}

                    <span id="entity">
                      Amount: &#8377;&nbsp;{bookdetails.amount}
                    </span>
                  </div>
                ))}
            </>
          )}

          <button onClick={handleClick} className="lButton">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default MyAcc;
