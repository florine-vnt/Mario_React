function CardBadBoy({ dataCharacter }) {
    let { characterImage, characterName, characterDescription, isGood } = dataCharacter

    return (
        <section className="itemContainer">
            <figure>
                <img src={characterImage} alt="Character" />
                <h2>{characterName}</h2>
                <p>{characterDescription}</p>
                <button></button>
                <button></button>
            </figure>

        </section>
    )
}

export default CardBadBoy;