import "./nav.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span>
          <img
            className="logo"
            src="https://promos.makemytrip.com/Growth/Images/1x/mmt_dt_top_icon.png"
            alt=""
            
          />
        </span>
        <div className="navItems">
          <button className="navButton">List your property</button>
          <button className="navButton">Log in / Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
