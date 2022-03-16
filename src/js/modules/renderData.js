import { checkState } from "./states.js";

let listItems = document.getElementsByClassName("resultBook");
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
    let elements = Array.prototype.slice.call( listItems )

    elements.forEach((item, i) => {
       if(data.results[i] === undefined){
          item.style.display = 'none';
          return;
       }
       console.log(data.results[i].coverimages)
       item.style.backgroundImage  = `url(${data.results[i].coverimages})`
    });
  }