import NewsCard from "./NewsCard";

function News() {
  return (
    <div>
      <section>
        <header>News</header>
        <p>
          We aim to stop public funds siphoning off and we have a plan that will
          help. We are working at the national and EU levels to advance.
        </p>
      </section>
      <section>
        <NewsCard />
      </section>
        
      <button>View all news</button>
    </div>
  );
}

export default News;
