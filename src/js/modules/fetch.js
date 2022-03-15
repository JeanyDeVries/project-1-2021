import { render } from "./renderData.js";

export function fetchData(url, config){
    //add loading state
    console.log(url);

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