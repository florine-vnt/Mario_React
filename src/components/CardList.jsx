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
            <div className="itemContainer">
                <CardGoodBoy dataCharacter={goodBoys[goodIndex]} />
                <div className='flex-container space-between'>
                    <button className={goodIndex > 0 ? 'btn btn-grey' : 'btn btn-disable'} onClick={goodIndex > 0 ? () => setGoodIndex((goodIndex) => goodIndex - 1) : null}>Previous</button>
                    <button className={goodIndex < goodBoys.length - 1 ? 'btn' : 'btn btn-disable'} onClick={goodIndex < goodBoys.length - 1  ? () => setGoodIndex((goodIndex) => goodIndex + 1) : null}>Next</button>
                </div>
            </div>
            <div className="itemContainer itemContainerDark">
                <CardBadBoy dataCharacter={badBoys[badIndex]} />
                <div className='flex-container space-between'>
                    <button className={badIndex > 0 ? 'btn btn-grey' : 'btn btn-disable'} onClick={badIndex > 0 ? () => setBadIndex((badIndex) => badIndex - 1) : null}>Previous</button>
                    <button className={badIndex < badBoys.length - 1 ? 'btn' : 'btn btn-disable'} onClick={badIndex < badBoys.length - 1  ? () => setBadIndex((badIndex) => badIndex + 1) : null}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default CardList;