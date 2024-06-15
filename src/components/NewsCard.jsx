function NewsCard(props) {
  return (
    <div>
      <figure>
        <img src={props.url} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button>
          Learn more
          <img
            src="../assets/arrow-right.svg"
            alt="arrow-icon"
            width="15px"
            className="news-container-arrow"
          />
        </button>
      </figure>
    </div>
  );
}

export default NewsCard;
