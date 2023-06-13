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
        defaultValue={props.name} 
        onChange={handleNameChange}
      />
      {/* Add a TrackList component here */}
      <Tracklist 
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
      />
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}
export default Playlist;
