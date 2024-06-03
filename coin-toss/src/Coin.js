import React from 'react'
import heads from "./assets/heads.jpg";
import tails from "./assets/tails.jpg";

const Coin = ({face}) => {
  return (
    <div>
        { face == "heads" ? <img src={heads} style={{width: 200}} alt={face} /> : <img src={tails} style={{width: 200}} alt={face} />}
    </div>
  )
}

export default Coin