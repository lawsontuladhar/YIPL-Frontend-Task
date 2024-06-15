import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Homepage from "./components/Homepage.jsx";
import Campaigns from "./components/Campaigns.jsx";
import WhoWeAre from "./components/WhoWeAre.jsx";
import News from "./components/News.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Homepage />
      <Campaigns />
      <WhoWeAre />
      <News />
    </div>
  );
}

export default App;
