import Featured from "../../components/featured";
import FeaturedProperties from "../../components/featuredprops";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MailList from "../../components/mail";
import Navbar from "../../components/nav";
import Properties from "../../components/properties";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <Properties />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
