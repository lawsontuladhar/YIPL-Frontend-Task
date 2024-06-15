function NewsCard({ data }) {
  return (
    <div className="news-card-container">
      {data.news.map((data) => (
        <div key={data.id} className="news-card-container-content">
          <img src={data.image} className="news-card-image" />
          <h1 className="news-card-title">{data.title}</h1>
          <p className="news-card-description">{data.content}</p>
          <button>
            <div className="news-card-btn">
              Learn more
              <img
                src="../../assets/icons/arrow-right-solid-1d6fa3-blue.svg"
                alt="arrow-icon"
                width="15px"
                className="news-card-container-arrow"
              />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default NewsCard;
