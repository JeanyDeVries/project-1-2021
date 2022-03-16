import { checkState } from "./states.js";

let listItems = '';
export function render(data, dataType) {
    checkState('showResults');
    const results = data.results;

    switch(dataType){
      case 'book':
        listItems = document.getElementsByClassName("resultBook");
        break;
      case 'excerpt':
        listItems = document.getElementsByClassName("resultExcerpt");
        break;
    }
    results.forEach((item, i) => {
       if(item === undefined){
          listItems[i].style.display = 'none';
          return;
       }
       listItems[i].style.backgroundImage  = `url(${item.coverimages[1]})`
    });
  }