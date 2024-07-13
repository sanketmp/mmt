import { useState, useContext } from "react";
import "./flightlist.css";
import useFetch from "../../hooks/useFetch";
// import Navbar from "../../components/nav";
import Header from "../../components/header";
import { useLocation, Link } from "react-router-dom";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
// import SearchItem from "../../components/search";
// import { SearchContext } from "../../context/searchcontext";
// import { FlightContext } from "../../context/flightcontext";
// import axios from "axios";
import FlightItem from "../../components/FlightBooking/FlightItem";
import { TbFaceIdError } from "react-icons/tb";
import MailList from "../../components/mail";
import Footer from "../../components/footer";

const Flightlist = () => {
  const location = useLocation();
  // const [destination, setDestination] = useState(location.state.destination);
  // const [dates, setDates] = useState(location.state.dates);
  // const [openDate, setOpenDate] = useState(false);
  // const [options, setOptions] = useState(location.state.options);
  // const [min, setMin] = useState(undefined);
  // const [max, setMax] = useState(undefined);
  // const [fromairports, setFromAirports] = useState(location.state.fromairports);
  // const [toairports, setToAirports] = useState(location.state.toairports);
  const [departure, setDeparture] = useState(location.state.departure);
  // const [returnDate, setReturnDate] = useState(location.state.returnDate);
  const [travellers, setTravellers] = useState(location.state.travellers);
  const [classType, setClassType] = useState(location.state.classType);

  const { data, loading, error } = useFetch(
    `/air/flights?from=${location.state.fromairports}&to=${location.state.toairports}`
  );

  const datetype = {
    takeoffdate: departure,
    ftype: classType,
    people: travellers,
  };

  // console.log(fromairports);
  // console.log(toairports);
  // console.log(data);
  //axios.get(`/air/flights?from=${fromairports}&to=${toairports}`)
  //console.log(location.state.fromairports);

  //const { dispatch } = useContext(FlightContext);

  //const { data, loading, error } = useFetch("/air/airports");

  // const handleClick = () => {
  //   dispatch({
  //     type: "NEW_FSEARCH",
  //     payload: {
  //       fromairports,
  //       toairports,
  //       departure,
  //       returnDate,
  //       travellers,
  //       classType,
  //     },
  //   });
  //   reFetch();
  // };

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listResult">
            {loading ? (
              "Loading Flights..."
            ) : (
              <>
                {data.length !== 0 ? (
                  data.map((item) => (
                    <FlightItem
                      datetype={datetype}
                      item={item}
                      key={item._id}
                    />
                  ))
                ) : (
                  <>
                    <TbFaceIdError style={{ fontSize: "30px" }} />
                    <h3>No Flights available at this moment.</h3>
                    <span>
                      Please try again later. Go to&nbsp;
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#eb2226" }}
                      >
                        Homepage.
                      </Link>
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <MailList />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Flightlist;
