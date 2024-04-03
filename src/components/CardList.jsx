import CardBadBoy from './CardBadBoy.jsx';
import { marioCharacters } from '../data.js';
import CardGoodBoy from './CardGoodBoy.jsx';
import { useState } from 'react';

let goodBoys = marioCharacters.filter((character) => character.isGood);
let badBoys = marioCharacters.filter((character) => !character.isGood);


function CardList() {
    const [goodIndex, setGoodIndex] = useState(0);
    const [badIndex, setBadIndex] = useState(0);


    return (
        <>
            <CardGoodBoy dataCharacter={goodBoys[goodIndex]} />
            {goodIndex > 0 ? <button onClick={() => setGoodIndex((goodIndex) => goodIndex - 1)}>Previous</button> : ""}
            {goodIndex < goodBoys.length - 1 ? <button onClick={() => setGoodIndex((goodIndex) => goodIndex + 1)}>Next</button> : ""}
            <CardBadBoy dataCharacter={badBoys[badIndex]} />
            {badIndex > 0 ? <button onClick={() => setBadIndex((badIndex) => badIndex - 1)}>Previous</button> : ""}
            {badIndex < badBoys.length - 1 ? <button onClick={() => setBadIndex((badIndex) => badIndex + 1)}>Next</button> : ""}
        </>
    )
}

export default CardList;