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
        <div className="campaigns-card-container-button">
          Learn more
          <img
            src="../../assets/icons/arrow-right-solid-1d6fa3-blue.svg"
            alt="arrow-icon"
            width="15px"
            className="campaigns-card-container-arrow"
          />
        </div>
      </button>
    </div>
  );
}

export default CampaignsCard;
