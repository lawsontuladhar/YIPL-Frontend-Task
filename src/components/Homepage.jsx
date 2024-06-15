import Navbar from "./Navbar";

function Homepage() {
  return (
    <div className="homepage-container">
      <Navbar />
      <main className="homepage-banner-container">
        {/* <div className="homepage-banner-image-container">
            <img src="../assets/images/hero-section.jpg" alt="" />
          </div> */}
        <section className="hero-container">
          <h1>Beautiful Analytics to grow smarter</h1>
          <p>
            Powerful, self-serve product and growth analytics to help you
            convert, engage and retain more users. Trusted by over 4,000
            startups.
          </p>
          <button>
            Why Catalog?
            <img
              src="../assets/icons/arrow-right-white.svg"
              alt="arrow-icon"
              width="15px"
              className="arrow-white"
            />
          </button>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
