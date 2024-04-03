function CardBadBoy({ dataCharacter }) {
    let { characterImage, characterName, characterDescription, isGood } = dataCharacter

    return (
        <figure className="itemContainer">
            <img src={characterImage} alt={characterName} />
            <h2>{characterName}</h2>
            <p>{characterDescription}</p>
        </figure>
    )
}

export default CardBadBoy;