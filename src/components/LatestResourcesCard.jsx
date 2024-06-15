function LatestResourcesCard(props) {
  return (
    <div className="latest-resources-card">
      <figure className="latest-resources-card-icon-container">
        <img
          src={`../../assets/icons/${props.image}`}
          width="26.72px"
          alt=""
          className="latest-resources-card-icon"
        />
        <p className="latest-resources-card-icon-title">{props.imageTitle}</p>
      </figure>
      <h1 className="latest-resources-card-header">{props.title}</h1>
      <p className="latest-resources-card-description">{props.description}</p>
      <button>
        <div className="latest-resources-card-btn">
          Learn more
          <img
            src="../../assets/icons/arrow-right-solid-1d6fa3-blue.svg"
            alt="arrow-icon"
            width="15px"
            className="latest-resources-card-container-arrow"
          />
        </div>
      </button>
    </div>
  );
}

export default LatestResourcesCard;
