import { checkState } from "./states.js";

let listItems = document.getElementsByClassName("resultBook");
export function render(data, dataType) {
    checkState('showResults');
    const results = data.results;

    switch(dataType){
      case 'book':
        listItems = document.getElementsByClassName("resultBook");
        break;
      case 'schooltv':
        listItems = document.getElementsByClassName("resultSchoolTV");
        break;
    }
    let elements = Array.prototype.slice.call( listItems )

    elements.forEach((item, i) => {
      if(data.results[i] === undefined || data.results[i] === null){
          item.style.display = 'none';
          return;
      }
      if(dataType === 'book')
      {
        item.style.backgroundImage  = `url(${data.results[i].coverimages[1]})`
      }
      else
      {
        if(`url(${data.results[i].coverimages[1]})` === undefined)
          item.style.backgroundImage  = `url(${data.results[i].coverimages[0]})`
        else
          item.style.backgroundImage  = `url(${data.results[i].coverimages})`
      }
    });
  }