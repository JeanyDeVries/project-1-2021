import { errorText } from "./states.js";

export async function checkError(response){
    console.log(response);
    if(response.status === 403 || response.status === 401){
        errorText.textContent = "Geen toegang, vraag aan bij: https://cors-anywhere.herokuapp.com/corsdemo";
    }
    else if(response.status === 404){
        errorText.textContent = "De site is niet vindbaar, probeer later weer de site te laden. Hopelijk is het dan bereikbaar.";
    }
    else if(response.status === 400){
        errorText.textContent = "De server werkt niet door een fout aan uw kant, check uw connectie.";
    }
    else if(response.status === 429){
        errorText.textContent = "De server heeft teveel requests";
    }
    else{
        if(!response)
            errorText.textContent = response;
    }
}