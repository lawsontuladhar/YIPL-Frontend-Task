import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Homepage from "./components/Homepage.jsx";
import Campaigns from "./components/Campaigns.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import News from "./components/News.jsx";
import "./styles.css";
import LatestResources from "./components/LatestResources.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import AboutUs from "./components/AboutUs.jsx";
import GoToTop from "./components/GoToTop.jsx";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Campaigns />
      <WhoWeAre />
      <AboutUs />
      <News />
      <LatestResources />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
