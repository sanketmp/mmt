import { Link } from "react-router-dom";
import "./Flight.css";
import { useState, useEffect } from "react";

const Flight = () => {
  const [airports, setAirports] = useState([]);
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState();
  const [classType, setClassType] = useState("Economy/Premium Economy");

  //   useEffect(() => {
  //     // Fetch the JSON data
  //     fetch("/airports.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setAirports(data);

  //         // Set a random default value
  //         const randomAirport = data[Math.floor(Math.random() * data.length)];
  //         setSelectedAirport(randomAirport.code);
  //       })
  //       .catch((error) => console.error("Error fetching airport data:", error));
  //   }, []);

  return (
    <>
      <div className="search-container">
        <div className="search-box">
          <div className="search-box-content">
            <div className="search-form">
              <div className="search-form-group">
                <label className="search-form-label">From</label>
                <select
                  className="search-form-select"
                  onChange={(e) => setSelectedAirport(e.target.value)}
                >
                  {airports.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.name} ({airport.code})
                    </option>
                  ))}
                </select>
              </div>
              <div className="search-form-group-center">
                <div className="search-form-icon">⇄</div>
              </div>
              <div className="search-form-group">
                <label className="search-form-label">To</label>
                <select
                  className="search-form-select"
                  onChange={(e) => setSelectedAirport(e.target.value)}
                >
                  {airports.map((airport) => (
                    <option key={airport.code} value={airport.code}>
                      {airport.name} ({airport.code})
                    </option>
                  ))}
                </select>
              </div>
              <div className="search-form-group">
                <label className="search-form-label">Departure</label>
                <input
                  type="date"
                  className="search-form-input"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                />
                <div className="search-form-date-info">
                  {new Date(departure).toLocaleDateString("en-IN", {
                    weekday: "long",
                  })}
                </div>
              </div>
              <div className="search-form-group">
                <label className="search-form-label">Return</label>
                <input
                  type="date"
                  className="search-form-input"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
              <div className="search-form-group">
                <label className="search-form-label">Travellers & Class</label>
                <div className="search-form-travellers-class">
                  <input
                    type="number"
                    className="search-form-travellers-input"
                    value={travellers}
                    onChange={(e) => setTravellers(e.target.value)}
                    min="1"
                  />
                  <select
                    className="search-form-class-select"
                    value={classType}
                    onChange={(e) => setClassType(e.target.value)}
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-button-container">
        <Link to={"/flight-list"}>
          <button className="search-button">Search Flight</button>
        </Link>
      </div>
    </>
  );
};

export default Flight;
