import Homepage from "./components/Homepage.jsx";
import Campaigns from "./components/Campaigns.jsx";
import "./styles.css";
import WhoWeAre from "./components/WhoWeAre.jsx";
import News from "./components/News.jsx";

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
