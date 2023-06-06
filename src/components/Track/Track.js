import React from 'react';
import 'Track.css';

function renderAction({ isRemoval }) {
  
  if (isRemoval) {
    return <button className="Track-action">-</button>
  } else {
    return <button className='Track-action'>+</button>
  }


  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track name will go here</h3>
        <p>Track artist will go here | Track album will go here</p>
      </div>
      <button className="Track-action">+ or - will go here</button>
      {renderAction()}
    </div>
  );
}
export default Track;
