import { render } from "./renderData.js";
import { checkState } from "./states.js";

export function fetchData(url, config){
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
            console.log(error);
        });
}