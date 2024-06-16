import { useState } from "react";
import searchIcon from "../../assets/icons/search-solid-white.svg";
import CompanyLogo from "../../assets/images/catalog-logo-white.png";
import DropDown from "./DropDown";
import Search from "./Search";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="Navigation-Wrapper">
      <nav className="Nav-Bar">
        <div className="Nav-Bar-logo-container">
          <a href="/Home">
            <img src={CompanyLogo} alt="Company Logo Here"></img>
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
          <li
            className="Nav-Bar-Links-Dropdown"
            onClick={() => setOpen((prev) => !prev)}
          >
            <a href="#Resource">
              Resources
              <img
                src="../assets/icons/chevron-down-white.svg"
                alt="down arrow"
                width="14px"
              />
            </a>
          </li>
        </ul>
        {open && <DropDown />}
      </nav>
      <search className="Search-Bar" onClick={() => setSearch((prev) => !prev)}>
        <img src={searchIcon} alt="" width="20px" />
        {search && <Search />}
      </search>
    </div>
  );
}

export default Navbar;
