

import { useState } from 'react'
function CardGoodBoy({ dataCharacter }) {

    let { characterImage, characterName, characterDescription, } = dataCharacter
    const [count, setCount] = useState(0)

    return (
        <figure className="item">
            <img src={characterImage} alt={characterName} />
            <h2>{characterName}</h2>
            <p>{characterDescription}</p>
            <div className='flex-container space-between'>
                <button className="icon-click" type="button" onClick={() => setCount((count) => count + 1)}><img src="src/assets/coin.png" alt="coin" className="coin" /> </button> <span className='result-click'>{count}</span>
            </div>
        </figure>
    )
}

export default CardGoodBoy;

// onClick={() => setCount((count) => count + 1)}{count}