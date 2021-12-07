import React from 'react'

export const CharacterCard = ({ character }) => {
    return (
        <div className="card col-3">
            <div>
                <img className="img-fluid" src={character.img} alt={character.name}></img>
            </div>
            <div className="card-body">
                <h5 className="card-body">{ character.name }</h5>
                <ul>
                    <li>Nickname: <span> {character.nickname} </span></li>
                    <li>Birthday: <span>{character.birthday}</span> </li>               
                </ul>


                
            </div>
        </div>

    )
}

export default CharacterCard;