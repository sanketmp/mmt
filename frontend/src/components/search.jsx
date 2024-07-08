import "./search.css";
import { Link } from "react-router-dom";

const Search = ({ item }) => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">
          {item.distance} from {item.city}
        </span>
        <span className="siTaxiOp">Free taxi</span>
        <span className="siSubtitle">{item.desc}</span>
        <span className="siCancelOp">Cancellation available</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">&#8377;{item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Search;

/**
 "_id": "668bb1e2a64dd8b77a6f4c04",
        "name": "Olden Oak Inn",
        "city": "Mumbai",
        "distance": "100kms",
        "desc": "Luxurious Lodging in Mumbai Central",
        "price": 1999,
        "createdAt": "2024-07-08T09:31:14.445Z",
        "updatedAt": "2024-07-08T09:31:14.445Z",
        "__v": 0
 */
