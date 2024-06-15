import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Homepage from "./components/Homepage.jsx";
import Campaigns from "./components/Campaigns.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import News from "./components/News.jsx";
import "./styles.css";
import LatestResources from "./components/LatestResources.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Campaigns />
      <WhoWeAre />
      <News />
      <LatestResources />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
