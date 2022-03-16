import { checkError } from "./error.js";
import { getData } from "./getData.js";
import { checkState } from "./states.js";

export function init(){
    location.hash = 'home';

    window.addEventListener("offline", function() {
        checkState('error');
        checkError();
    });
    
    //only get data when the hash isnt set to home, otherwise home page will be hidden
    window.addEventListener('hashchange', function() {
        if(this.location.hash !== '#home'){
            getData()
        }
        else{
            checkState('home');
        }
      });
}