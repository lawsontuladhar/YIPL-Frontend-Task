function CampaignsCard(props) {
  return (
    <div className="campaigns-card-container">
      <img
        src={`../../assets/images/${props.image}`}
        alt="campaigns-card"
        className="campaigns-card-container-image"
      />
      <h4 className="campaigns-card-container-header">{props.title}</h4>
      <p className="campaigns-card-container-content">{props.content}</p>
      <button>
        Learn more
        <img
          src="../../assets/icons/arrow-right.svg"
          alt="arrow-icon"
          width="15px"
          className="campaigns-card-container-arrow"
        />
      </button>
    </div>
  );
}

export default CampaignsCard;
