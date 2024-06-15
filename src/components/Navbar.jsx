import searchIcon from "../../assets/icons/search.svg";
import CompanyLogo from "../../assets/images/company-logo.png";

function Navbar() {
  return (
    <div className="Navigation-Wrapper">
      <nav className="Nav-Bar">
        <div className="Nav-Bar-logo-container">
          <a href="/Home">
            <img src={CompanyLogo} alt="Company Logo Here" width="50"></img>
          </a>
        </div>
        <ul className="Nav-Bar-Links">
          <li>
            <a href="#Hero">Home</a>
          </li>
          <li>
            <a href="#AboutUs">About Us</a>
          </li>
          <li>
            <a href="#CaseStudies">Case Studies</a>
          </li>
          <li>
            <a href="#Resource" className="Nav-Bar-Links-Dropdown">
              Resources
            </a>
            <img
              src="../assets/icons/down-arrow-5-svgrepo-com.svg"
              alt="down arrow"
              width="14px"
            />
          </li>
        </ul>
      </nav>
      <search className="Search-Bar">
        <img src={searchIcon} alt="" width="20px" />
      </search>
    </div>
  );
}

export default Navbar;

{
  /* <div className="Nav-Bar">
            <a href="/Home">
              <img
                src=" ../assets/images/company_logo.jpg"
                alt="Company Logo Here"
                width="100"
                height="100"
              ></img>
            </a>
            <ul className="Nav-Bar-Links">
              <li>
                <a href="/Home">Home</a>
              </li>
              <li>
                <a href="/AboutUs">About Us</a>
              </li>
              <li>
                <a href="/CaseStudies">Case Studies</a>
              </li>
              <li>
                <a href="/Resource" className="Nav-Bar-Links-Dropdown">
                  Resources
                </a>
                <img
                  src="../assets/icons/down-arrow-5-svgrepo-com.svg"
                  alt="down arrow"
                  width="14px"
                />
              </li>
            </ul>
          </div>
          <search className="Search-Bar">
            <img
              src="../assets/icons/search-svgrepo-com.svg"
              alt=""
              width="20px"
            />
            <input
              type="text"
              name="search"
              id="search"
              src="../assets/icons/search-svgrepo-com.svg"
            />
          </search> */
}
