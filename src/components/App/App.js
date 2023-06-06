import React from "react";
import ReactDOM from 'react-dom';
import { useState   } from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Example Track Name",
      artist: "Example Track Artist",
      album: "Example Track Album",
      id: 1,
    },
    {
      name: "Example Track Name 2",
      artist: "Example Track Artist 2",
      album: "Example Track Album 2",
      id: 2,
    },
  ])

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          {/* Add a SearchBar component here */}
          <SearchBar />
        <div className="App-playlist">
          {/* Add a SearchResults component here */}
          <SearchResults searchResults={searchResults}/>
          {/* Add a Playlist component here */}
          <Playlist />
        </div>
        </div>
    </div>
  );
}

export default App;
