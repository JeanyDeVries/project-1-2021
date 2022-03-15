const mainDisplay = document.querySelector('ol');

export function checkState(state){
    switch(state){
        case 'home':
            mainDisplay.style.display = 'block'
            break;
        case 'showResults':
            mainDisplay.style.display = 'none'
            break;
    }
}