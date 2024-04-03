function CardGoodBoy({ dataCharacter }) {
    let { characterImage, characterName, characterDescription } = dataCharacter;

    return (
        <section className="itemContainer">
            <figure>
                <img src={characterImage} alt="Character" />
                <div>Good Boy</div>
                <h2>{characterName}</h2>
                <p>{characterDescription}</p>
            </figure>

        </section>
    )
}

export default CardGoodBoy;