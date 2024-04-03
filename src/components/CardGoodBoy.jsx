function CardGoodBoy({ dataCharacter }) {
    let { characterImage, characterName, characterDescription, } = dataCharacter

    return (
        <figure className="itemContainer">
            <img src={characterImage} alt={characterName} />
            <h2>{characterName}</h2>
            <p>{characterDescription}</p>
        </figure>
    )
}

export default CardGoodBoy;