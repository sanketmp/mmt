import "./myacc.css";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/authcontext.jsx";
import useFetch from "../hooks/useFetch";
import { MdDelete } from "react-icons/md";

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

  const handledelete = (id) => {
    axios.delete(`/booking/${id}`);
    window.location.reload(false);
  };

  return (
    <>
      <div className="loginn">
        <div className="Containerr">
          <div style={{ marginBottom: "30px" }}>
            &lt;&nbsp;
            <Link style={{ textDecoration: "none" }} to="/">
              Back
            </Link>
          </div>
          <span style={{ textAlign: "center", fontSize: "30px" }}>
            My Bookings
          </span>
          {loading ? (
            "Loading Booking Details..."
          ) : (
            <>
              {data &&
                data.map((bookdetails, index) => (
                  <div className="bookingdetail" key={index}>
                    {bookdetails.type === "H" && (
                      <>
                        <span>Booking ID: {bookdetails._id}</span>
                        <br />
                        <br />
                        <span id="details">Booking Type(H/F): </span>
                        <span id="info">{bookdetails.type}</span>
                        <br />
                        <span id="details">Hotel Name and City: </span>
                        <span id="info">
                          &nbsp;{bookdetails.hotelname},&nbsp;
                          {bookdetails.hotelcity}.
                        </span>
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

                    <div
                      id="entity"
                      style={{
                        border: "none",
                        marginTop: "30px",
                        padding: "10px",
                        backgroundColor: "rgba(248, 149, 149, 0.514)",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Amount: &#8377;&nbsp;{bookdetails.amount}</span>
                      <button
                        className="deletebtn"
                        onClick={() => handledelete(bookdetails._id)}
                        title="Delete this Booking"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                ))}
            </>
          )}

          {/* <button onClick={handleClick} className="lButtonn">
            Logoutt
          </button> */}
        </div>
      </div>
    </>
  );
};

export default MyAcc;
