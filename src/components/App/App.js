import React from "react";
import ReactDOM from 'react-dom';
import { useState   } from "react";
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import PlaylistList from '../PlaylistList/PlaylistList';
import { spotifySearch, savePlaylist, getUserPlaylists, getPlaylistTracks } from '../../util/Spotify';

function App() {
  //add state variables below:
  // const [results, setResults] = useState([]);
  
  const [searchResults, setSearchResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [playlistTitle, setPlaylistTitle] = useState([]);
  const [playlistName, setPlaylistName] = useState(['My Playlist']);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  //add additional functions below:

  async function onSelectPlaylist(id, name) {
    const tracks = await getPlaylistTracks(id)
    console.log("tracks= ", tracks);
    setPlaylistTracks(tracks);
    setPlaylistName(name);
  }
  
  async function onGetPlaylists(){
    const lists = await getUserPlaylists();
    setPlaylists(lists);
  }
  
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
    let savedList = playlistTracks.map(playlistTrack => playlistTrack.uri);
    savePlaylist(playlistName, savedList);
    setSearchResults([]);
    setPlaylistName('My Playlist');
  }

  function onSearchTerm(term) {
    setSearchTerm(term);
  }

  function onSearch(term) {
    spotifySearch(term).then(setSearchResults);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          {/* Add a SearchBar component here */}
          <SearchBar 
          onSearchTerm={onSearchTerm}
          searchTerm={searchTerm}
          onSearch={onSearch}
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
