import { useEffect } from "react";

//

function NewsCard({ data }) {
  return (
    <div className="news-card-component">
      {data.news.map((data) => (
        <figure key={data.id}>
          <img src={data.image} />
          <h1>{data.title}</h1>
          <p>{data.content}</p>
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
      ))}
    </div>
  );
}

export default NewsCard;
