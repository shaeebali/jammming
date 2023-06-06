import React from 'react';
import TrackList from '../Tracklist/TrackList';
import './SearchResults.css';

function SearchResults() {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      {/* Add TrackList component here */}
      <TrackList tracks={SearchResults}/>    
    </div>
  );
}
export default SearchResults;
