const mainDisplay = document.querySelector('ol');
const resultDisplay = document.querySelector('main>div');
const loadingElement = document.getElementById("loadElement");
export const errorText = document.getElementById("errorMessage");

export function checkState(state){
    switch(state){
        case 'home':
            mainDisplay.style.display = 'block'
            resultDisplay.style.display = 'none'
            loadingElement.style.display = "none";   
            errorText.style.display = "none";   
            break;
        case 'showResults':
            mainDisplay.style.display = 'none'
            resultDisplay.style.display = 'block'
            loadingElement.style.display = "none";   
            errorText.style.display = "none";   
            break;
        case 'loading':
            loadingElement.style.display = "flex";   
            errorText.style.display = "none";   
            break;
        case 'error':
            resultDisplay.style.display = 'none'
            loadingElement.style.display = "none"; 
            mainDisplay.style.display = 'none'
            errorText.style.display = "block";   
            break;
    }
}