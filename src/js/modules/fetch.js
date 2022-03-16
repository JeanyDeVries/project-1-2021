import { render } from "./renderData.js";
import { checkState } from "./states.js";
import { checkError } from "./error.js";

export function fetchData(url){
    checkState('loading');
    fetch(url)
        .then(response => {
            if(response.ok)
                return response.json();
        })
        .then(function(data){
            console.log(data)
            render(data);
        })
        .catch((error) => {
            //checkState('error');
            //checkError(response);
        });
}