const mainDisplay = document.querySelector('ol');
const resultDisplay = document.querySelector('main>div');

const loadingElement = document.getElementById("loadElement");

export function checkState(state){
    console.log(state);
    switch(state){
        case 'home':
            mainDisplay.style.display = 'block'
            resultDisplay.style.display = 'none'
            loadingElement.style.display = "none";   
            break;
        case 'showResults':
            mainDisplay.style.display = 'none'
            resultDisplay.style.display = 'block'
            loadingElement.style.display = "none";   
            break;
        case 'loading':
            loadingElement.style.display = "flex";   
            break;
    }
}