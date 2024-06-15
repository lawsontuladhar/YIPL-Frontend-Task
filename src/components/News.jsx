import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";

const API_URL =
  "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json";

function News() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  console.log(data);

  return (
    <div className="news-container">
      <section className="news-text-container">
        <header className="news-text-header">News</header>
        <p className="news-text-description">
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </section>

      {data && (
        <section className="news-card-component">
          <NewsCard data={data} key={data.id} />
        </section>
      )}

      <button className="news-container-btn">View all news</button>
    </div>
  );
}

export default News;
