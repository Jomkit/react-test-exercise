import React, { useState } from 'react'
import Coin from './Coin';

const CoinToss = () => {
    const [ face, setFace] = useState();
    const [ heads, setHeads] = useState(0);
    const [ tails, setTails] = useState(0);
    const getFace = () => {
        const headsOrTails = (Math.random() - 0.5) > 0 ? "heads" : "tails";
        headsOrTails === "heads" ? setHeads(heads + 1) : setTails(tails + 1);
        setFace(headsOrTails);
    }
  return (
    <div>
        { face ? <Coin face={face} /> : null}
        <button onClick={getFace} >FLIP ME</button>
        <p>Out of {heads + tails} flips, there have been {heads} heads and {tails} tails</p>
    </div>
  )
}

export default CoinToss