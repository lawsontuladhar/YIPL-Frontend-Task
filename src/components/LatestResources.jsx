import LatestResourcesCard from "./LatestResourcesCard";

function LatestResources() {
  return (
    <div className="latest-resources-container" id="Resources">
      <section className="latest-resources-text-container">
        <header className="latest-resources-text-header">
          Latest Resources
        </header>
        <p className="latest-resources-text-description">
          The latest resources includes Transparency Toolkit, Evidence, Best
          Practices
        </p>
      </section>
      <div className="latest-resources-component">
        <LatestResourcesCard
          image={"tools-solid.svg"}
          imageTitle={"Tool"}
          title={"Defence Elvis"}
          description={
            "It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          }
          iconBackground="purple"
        />
        <LatestResourcesCard
          image={"file-lines-solid.svg"}
          imageTitle={"Evidence"}
          title={"Open Procurement"}
          description={
            "It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          }
          iconBackground="blue"
        />
        <LatestResourcesCard
          image={"check-solid.svg"}
          imageTitle={"Best Practices"}
          title={"Transparent Spending"}
          description={
            "It allows creating networks of public spending on goods services used in defense in 28 EU countries..."
          }
          iconBackground="orange"
        />
      </div>
      <button className="latest-resources-btn">View all resources</button>
    </div>
  );
}

export default LatestResources;
