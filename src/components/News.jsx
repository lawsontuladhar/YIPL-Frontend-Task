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
    <div>
      <section>
        <header>News</header>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </section>

      {data && (
        <section className="news-component">
          <NewsCard data={data} />
        </section>
      )}

      <button>View all news</button>
    </div>
  );
}

export default News;
