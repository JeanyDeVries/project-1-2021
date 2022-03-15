import { render } from "./renderData.js";

export function fetchData(url, config){
    //add loading state
    fetch(url)
        .then(response => {
            if(response.ok)
                return response.json();
        })
        .then(function(data){
            render(data);
        })
        .catch((error) => {
            console.log(error);
        });
}