import React from "react";

function LatestResources() {
  return (
    <div>
      <section>
        <header>Latest Resources</header>
        <p>
          The latest resources includes Transparency Toolkit, Evidence, Best
          Practices
        </p>
      </section>
      <section>
        <figure>
          <img src="https://picsum.photos/200" alt="" />
          <p>Tool</p>
        </figure>
        <h1>Defence Elvis</h1>
        <p>
          It allows creating networks of public spending on goods services used
          in defense in 28 EU countries...
        </p>
        <button>
          Learn more
          <img
            src="../assets/arrow-right-svgrepo-com.svg"
            alt="arrow-icon"
            width="15px"
            className="arrow arrow-white"
          />
        </button>
      </section>
      <button>View all resources</button>
    </div>
  );
}

export default LatestResources;
