const mainDisplay = document.querySelector('ol');
const resultDisplay = document.querySelector('main>div');

export function checkState(state){
    switch(state){
        case 'home':
            mainDisplay.style.display = 'block'
            resultDisplay.style.display = 'none'
            break;
        case 'showResults':
            mainDisplay.style.display = 'none'
            resultDisplay.style.display = 'block'
            break;
    }
}