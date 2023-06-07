import React from 'react';
import TrackList from '../Tracklist/Tracklist';
import './SearchResults.css';

function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* Add TrackList component here */}
      <TrackList tracks={props.searchResults}/>    
    </div>
  );
}
export default SearchResults;
