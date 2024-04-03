import IconClicker from './IconClicker'

function CardBadBoy({ dataCharacter }) {
    let { characterImage, characterName, characterDescription } = dataCharacter;
    return (
        <figure className="item">
            <img src={characterImage} alt={characterName} />
            <h2>{characterName}</h2>
            <p className='description'>{characterDescription}</p>
            <IconClicker key={characterName} />
        </figure>
    )
}

export default CardBadBoy;