import LatestResourcesCard from "./LatestResourcesCard";

function LatestResources() {
  return (
    <div className="latest-resources-container">
      <section className="latest-resources-text-container">
        <header className="latest-resources-text-header">
          Latest Resources
        </header>
        <p className="latest-resources-text-description">
          The latest resources includes Transparency Toolkit, Evidence, Best
          Practices
        </p>
      </section>
      <LatestResourcesCard image={"tools-solid.svg"} imageTitle={"Tool"} />
      <LatestResourcesCard
        image={"file-lines-solid.svg"}
        imageTitle={"Evidence"}
      />
      <LatestResourcesCard
        image={"check-solid.svg"}
        imageTitle={"Best Practices"}
      />
      <button>View all resources</button>
    </div>
  );
}

export default LatestResources;
