import CampaignsCard from "./CampaignsCard";

function Campaigns() {
  return (
    <div className="campaigns-container" id="Campaigns">
      <section className="campaigns-header-container">
        <h1>Campaigns</h1>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </section>

      <div className="campaigns-container-card-components">
        <CampaignsCard
          title="Open Data Directive"
          content="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
          image="campaigns-1.jpg"
        />
        <CampaignsCard
          title="Beneficial Ownership"
          content="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
          image="campaigns-2.jpg"
        />
        <CampaignsCard
          title="EU Recovery Transparency"
          content="In view of Russia’s military action against the Ukrainian people, being concerned about ensuring that European funds In view of Russia’s military action against the Ukrainian people, "
          image="campaigns-3.jpg"
        />
      </div>
    </div>
  );
}

export default Campaigns;
