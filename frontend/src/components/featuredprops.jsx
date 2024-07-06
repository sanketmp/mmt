import "./featuredprops.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Sofitel Mumbai BKC</span>
        <span className="fpCity">BKC, Munbai</span>
        <span className="fpPrice">Starting from 12k INR</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel Sea Princess</span>
        <span className="fpCity">Juhu, Mumbai</span>
        <span className="fpPrice">Starting from 14k INR</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/736x/8f/67/32/8f6732ca0da7173c8b6ec37618faf523.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Courtyard Nashik</span>
        <span className="fpCity">Nashik</span>
        <span className="fpPrice">Starting from 9k INR</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://static.wixstatic.com/media/c2a0df_c66d1c8397c24a469ef095728b746edd~mv2.webp"
          alt=""
          className="fpImg"
        />
        <span className="fpName">JW Marriott Hotel</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from 10k INR</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
