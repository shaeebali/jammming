import React from 'react';
import './Track.css';

//Need to add track and remove track functionality:
function Track(props) {
  function renderButton() {
    if (props.onAdd) {
      return <button className="Track-button" onClick={handleAddTrack}>+</button>
  } else {
      return <button className="Track-button" onClick={handleRemoveTrack}>+</button>
  }
}
function handleAddTrack() {
  props.onAdd(props.track);
}
function handleRemoveTrack() {
  props.onRemove(props.track);
}

  return (
    <div id={props.track.id} className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button className="Track-action"></button>
      {renderButton()}
    </div>
  );
}
export default Track;
