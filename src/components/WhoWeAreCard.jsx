function WhoWeAreCard(props) {
  return (
    <div>
      <figure className="who-we-are-card-component">
        <img src={`../../assets/images/${props.image}`} alt="campaigns-image" />
        <p>{props.name}</p>
      </figure>
    </div>
  );
}

export default WhoWeAreCard;
