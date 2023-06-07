import React from "react";
import './TrackList.css';
import Track from '../Track/Track';

function TrackList(props) {
  return (
    <div className="TrackList">
      {/* Add a map method here that renders a set of track components */}
      {props.tracks.map((track) => {
          return (
            <Track 
              id={track.id} 
              key={track.id} 
              onRemove={props.onRemove}
              onAdd={props.onAdd}
              track={track}
            />
          );
      })}
        </div>
    );
};
export default TrackList;
