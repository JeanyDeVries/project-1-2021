const mainDisplay = document.querySelector('ol');
const resultDisplay = document.querySelector('main>div');
const loadingElement = document.getElementById("loadElement");
export const errorText = document.getElementById("errorMessage");

export function checkState(state){
    switch(state){
        case 'home':
            mainDisplay.style.setProperty('display', 'block');
            resultDisplay.style.setProperty('display', 'none');
            loadingElement.style.setProperty('display', 'none');  
            errorText.style.setProperty('display', 'none'); 
            break;
        case 'showResults':
            mainDisplay.style.setProperty('display', 'none');
            resultDisplay.style.setProperty('display', 'block');
            loadingElement.style.setProperty('display', 'none'); 
            errorText.style.setProperty('display', 'none');
            break;
        case 'loading':
            loadingElement.style.setProperty('display', 'flex'); 
            errorText.style.setProperty('display', 'none');
            break;
        case 'error':
            resultDisplay.style.setProperty('display', 'none');
            loadingElement.style.setProperty('display', 'none');
            mainDisplay.style.setProperty('display', 'none');
            errorText.style.setProperty('display', 'block'); 
            break;
    }
}