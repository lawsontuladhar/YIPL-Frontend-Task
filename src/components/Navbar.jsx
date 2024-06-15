import searchIcon from "../../assets/icons/search-solid-white.svg";
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
          <li className="Nav-Bar-Links-Dropdown">
            <a href="#Resource">Resources</a>
            <img
              src="../assets/icons/chevron-down-white.svg"
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
