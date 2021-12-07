import { useState, useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import {getQuote} from '../utils/api';
import {Link} from 'react-router-dom';


function Quote() {
    const [quote, setQuote] = useState();
    
    useEffect( () => {
      NewQuote()
    }, [])

async function NewQuote(){
    setQuote(null);
    const response = await getQuote()
        setQuote(response[0])
}


  return (
    <div className="container">
      <h1 className="pb-2 pt-1 ml-2">Frases</h1>
      <div className="row">
      { quote != null ? <>
        <h1>{ quote.quote }</h1>
        <p> Author: { quote.author} </p>
        <button className="btn btn-primary" onClick={NewQuote}>Nueva Frase</button>
      </>
       : <p>Loading</p> 
    }
      </div>
    </div>
  );
}

export default Quote;