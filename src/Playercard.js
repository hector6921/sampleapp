import React from 'react';

const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const Playercard = (props) => {
  return(
    <div className = "player-card"><img src={props.sign} /></div>

  )
}
export default Playercard;