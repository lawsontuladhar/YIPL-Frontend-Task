function Search() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <img
        src="../../assets/icons/circle-xmark.png"
        alt=""
        className="close-search-icon"
      />
    </div>
  );
}

export default Search;
