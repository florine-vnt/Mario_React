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
        <div className='flex-container'>
            <CardGoodBoy dataCharacter={goodBoys[goodIndex]} />
            <CardBadBoy dataCharacter={badBoys[badIndex]} />
            
        </div>
    )
}

export default CardList;