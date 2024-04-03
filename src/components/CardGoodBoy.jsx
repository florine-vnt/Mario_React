import IconClicker from './IconClicker'

function CardGoodBoy({ dataCharacter }) {

    let { characterImage, characterName, characterDescription } = dataCharacter

    return (
        <figure className="item">
            <img src={characterImage} alt={characterName} />
            <h2>{characterName}</h2>
            <p className='description'>{characterDescription}</p>
            <IconClicker key={characterName} />
        </figure>
    )
}

export default CardGoodBoy;

// onClick={() => setCount((count) => count + 1)}{count}