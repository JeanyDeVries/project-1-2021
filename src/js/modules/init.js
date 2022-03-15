import { checkError } from "./error.js";
import { getData } from "./getData.js";

export function init(){
    window.addEventListener("offline", function() {
        checkError('noInternet');
    });
    
    window.addEventListener("hashchange", getData());
}