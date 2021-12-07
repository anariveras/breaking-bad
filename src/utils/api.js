import { BASE_URL } from "./constants";

export async function getCharacters (){
    try {
        const url = `${BASE_URL}characters`;
        const respose = await fetch(url);
        const result = await respose.json();
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}

export async function getQuote (){
    try {
        const url = `${BASE_URL}quote/random`;
        const respose = await fetch(url);
        const result = await respose.json();
        return result
    } catch (error) {
        console.log(error);
        return null
    }
}
