import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          {/* Add a SearchBar component here */}
          <SearchBar />
        <div className="App-playlist">
          {/* Add a SearchResults component here */}
          <SearchResults />
          {/* Add a Playlist component here */}
          <Playlist />
        </div>
        </div>
    </div>
  );
}

export default App;
