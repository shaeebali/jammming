import React from 'react';
import './Track.css';

function renderAction({ isRemoval }) {
  
  if (isRemoval) {
    return <button className="Track-action">-</button>
  } else {
    return <button className='Track-action'>+</button>
  }


  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action">+ or - will go here</button>
      {renderAction()}
    </div>
  );
}
export default Track;
