import AboutUsCard from "./AboutUsCard";

function AboutUs() {
  return (
    <div id="AboutUs">
      <div className="about-us-component">
        <img
          src="../../assets/icons/chevron-left-solid-585858.svg"
          alt="left-arrow"
          className="left-arrow"
        />

        <AboutUsCard title="Layers" image={"random-logo.png"} />
        <AboutUsCard title="Quotient" image="random-logo.png" />
        <AboutUsCard title="Sisyphus" image="random-logo.png" />
        <AboutUsCard title="Hourglass" image="random-logo.png" />
        <AboutUsCard title="Circooles" image="random-logo.png" />

        <img
          src="../../assets/icons/chevron-right-solid-585858.svg"
          alt="right-arrow"
          className="right-arrow"
        />
      </div>
    </div>
  );
}

export default AboutUs;
