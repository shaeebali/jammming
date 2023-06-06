import React from "react";
import './TrackList.css';
import Track from '../Track/Track';

function TrackList(tracks) {
  return (
    <div className="TrackList">
      {/* Add a map method here that renders a set of track components */}
      {tracks.map(song => {
        return(<Track 
          track={song}
          key={song.id} 
          />);
      })}
    </div>

  );
};
export default TrackList;
