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
                    {goodIndex > 0 ? <button className='btn btn-grey' onClick={() => setGoodIndex((goodIndex) => goodIndex - 1)}>Previous</button> : <button className='btn btn-disable' >Previous</button>}
                    {goodIndex < goodBoys.length - 1 ? <button className='btn' onClick={() => setGoodIndex((goodIndex) => goodIndex + 1)}>Next</button> : ""}
                </div>
            </div>
            <div className="itemContainer">
                <CardBadBoy dataCharacter={badBoys[badIndex]} />
                <div className='flex-container space-between'>
                    {badIndex > 0 ? <button className='btn btn-grey' onClick={() => setBadIndex((badIndex) => badIndex - 1)}>Previous</button> : <button className='btn btn-disable' >Previous</button>}
                    {badIndex < badBoys.length - 1 ? <button className='btn' onClick={() => setBadIndex((badIndex) => badIndex + 1)}>Next</button> : ""}
                </div>
            </div>
        </div>
    )
}

export default CardList;