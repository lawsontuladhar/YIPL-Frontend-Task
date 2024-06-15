import WhoWeAreCard from "./WhoWeAreCard";

function WhoWeAre() {
  return (
    <div className="who-we-are-container">
      <section className="who-we-are-text-container">
        <header className="who-we-are-text-header">Who We Are</header>
        <article className="who-we-are-text-description">
          We are a collaboration of Non Govt. and professionals working to
          ensure that government spending is done fairly, openly, efficiently,
          and creates the best value for money and best outcomes for Europe. We
          are working at the national and EU levels to advance the principles of
          openness in spending of funds, procurement, and company ownership
          within the EU.
        </article>

        <button >
          <div className="who-we-are-btn">
            See More
            <img
              src="../../assets/icons/arrow-right-solid-1d6fa3-blue.svg"
              alt="arrow-icon"
              width="15px"
              className="who-we-are-container-arrow"
            />
          </div>
        </button>
      </section>
      <figure className="who-we-are-images-container">
        <div className="container-1">
          <WhoWeAreCard name="Adiana Homolova" image="who-we-are-1.jpg" />
          <WhoWeAreCard name="Karolis Granickas" image="who-we-are-2.jpg" />
        </div>
        <div className="container-2">
          <WhoWeAreCard name="Sandor Lederer" image="who-we-are-3.jpg" />
          <WhoWeAreCard name="Zara Montgomery" image="who-we-are-4.jpg" />
        </div>
      </figure>
    </div>
  );
}

export default WhoWeAre;
