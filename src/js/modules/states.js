const mainDisplay = document.querySelector('ol');

export function checkState(state){
    console.log(mainDisplay)
    switch(state){
        case 'home':
            location.hash = 'home';
            mainDisplay.style.display = 'block'
            break;
        case 'showResults':
            mainDisplay.style.display = 'hidden'
            break;
    }
}