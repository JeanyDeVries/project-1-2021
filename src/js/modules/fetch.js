import { render } from "./renderData.js";
import { checkState } from "./states.js";
import { checkError } from "./error.js";

export function fetchData(url, type){
    checkState('loading');
    fetch(url)
        .then(response => {
            if(response.ok)
                return response.json();
            else
                throw (response)
        })
        .then(function(data){
            console.log(data)
            render(data);
        })
        .catch((error) => {
            console.log(error)
            checkState('error');
            checkError(error);
        });
}