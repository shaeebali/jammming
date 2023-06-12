import React from 'react';
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
  
  function handleNameChange(event) {
    props.onNameChange(event.target.value);
  };
  
  return (
    <div className="Playlist">
      <input 
        defaultValue={"New Playlist"} 
        onChange={handleNameChange}
      />
      {/* Add a TrackList component here */}
      <Tracklist 
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
export default Playlist;
