import React from 'react';
import './SearchBar.css';

function SearchBar(props) {

  const placeholder = props.searchTerm ? props.searchTerm : "Enter A Song, Album, or Artist!!!";

  function handleTermChange(event) {
    const newSearchTerm = event.target.value;
    props.onSearchTerm(newSearchTerm);
  }
  
  function handleSearch() {
    props.onSearch(props.searchTerm)
  }

  return (
    <div className="SearchBar">
      <input onChange={handleTermChange} placeholder={placeholder} id="SearchBar"/>
      <button className="SearchButton" onClick={handleSearch}>SEARCH</button>
    </div>
  );
}
export default SearchBar;
