import { useState } from 'react'


function CardBadBoy({ dataCharacter }) {
    let { characterImage, characterName, characterDescription, isGood } = dataCharacter
    const [count, setCount] = useState(0)   
    return (
        <section className="itemContainer">
            <figure>
                <img src={characterImage} alt="Character" />
                <h2>{characterName}</h2>
                <p>{characterDescription}</p>
                <button className = "icon-click" type = "button" onClick={() => setCount((count) => count + 1)}><img src="src/assets/coin.png" alt="coin" className="coin"  /> </button> <span>{count}</span>
            </figure>

        </section>
    )
}

export default CardBadBoy;