import React from "react";
import ReactDOM from 'react-dom';
import { useState   } from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  //add state variables below:
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

  const [playlistTitle, setPlaylistTitle] = useState([]);

  const [playlistName, setPlaylistName] = useState([
    {
      name: "Example Playlist Name",
      artist: "Example Playlist Artist",
      album: "Example Playlist Album",
      id: 3,
    }
  ]);
  
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "Example Playlist Name",
      artist: "Example Playlist Artist",
      album: "Example Playlist Album",
      id: 4,
    },
    {
      name: "Example Playlist Name 2",
      artist: "Example Playlist Artist 2",
      album: "Example Playlist Album 2",
      id: 5,
    }
  ]);

  //add additional functions below:

  function onAdd(track) {
    
    if (!playlistTracks.find(playlistTrack => playlistTrack.id === track.id)) {
      setPlaylistTracks(playlistTracks => [...playlistTracks, track]);
    };
  }

  function onRemove(track) {
    setPlaylistTracks(playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id));
  }

  function onNameChange(name) {
    setPlaylistTitle(name);
  }

  function onSave() {
    const trackURIs = playlistTracks.map(playlistTrack => playlistTrack.uri);
  }

  function onSearchTerm(term) {
    console.log(term);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          {/* Add a SearchBar component here */}
          <SearchBar 
          onSearchTerm={onSearchTerm}
          />
        <div className="App-playlist">
          {/* Add a SearchResults component here */}
          <SearchResults 
          searchResults={searchResults}
          onAdd={onAdd}
          />
          {/* Add a Playlist component here */}
          <Playlist 
          playlistName={playlistName}
          onNameChange={onNameChange} 
          playlistTracks={playlistTracks}
          onAdd={onAdd}
          onRemove={onRemove}
          onSave={onSave}
          />
        </div>
        </div>
    </div>
  );
}

export default App;
