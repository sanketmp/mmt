import "./myacc.css";

const myacc = () => {
  return (
    <>
      <p id="username">username</p>
      <p id="bookings">Bookings:</p>
      <div className="bookingdetails">
        <p id="type">type H/F</p>
        <p id="hoteln">Hotel name, hotelcity</p>
        {type === "F" && (
          <>
            <p id="airline">airline</p>
            <p id="from">from:from to:to</p>
          </>
        )}
        <p id="totalpeople">total people</p>
        <p id="amount">amount</p>
      </div>
      <button>Logout</button>
    </>
  );
};

export default myacc;
