import { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import {getCharacters} from '../utils/api';
import {Link} from 'react-router-dom';


function Personajes() {
    const [characters, setCharacter] = useState();
    
    useEffect( () => {
      (async()=>{ 
        const response = await getCharacters();
        setCharacter(response);
       })()
    }, [])



  return (
    <div className="container">
         <Link exact to="/"> Inicio </Link> 
      <h1 className="pb-2 pt-1 ml-2">Personajes</h1>
      <div className="row">
      { characters != null ? characters.map(item => { 
        return( <CharacterCard 
        character={item}/>  ) 
      }) : <p>Loading</p> 
    }
      </div>
    </div>
  );
}

export default Personajes;