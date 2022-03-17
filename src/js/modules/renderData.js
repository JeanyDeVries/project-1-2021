import { checkState } from "./states.js";

let listItems = document.getElementsByClassName("resultBook");
export function render(data, dataType) {
    checkState('showResults');
    const results = data.results;

    switch(dataType){
      case 'book':
        listItems = document.getElementsByClassName("resultBook");
        break;
      case 'audiobook':
        listItems = document.getElementsByClassName("resultListenBook");
        break;
      case 'schooltv':
        listItems = document.getElementsByClassName("resultSchoolTV");
        break;
    }
    let elements = Array.prototype.slice.call( listItems )

    elements.forEach((item, i) => {
      if(data.results[i] === undefined || data.results[i] === null){
          item.style.setProperty('display', 'none');
          return;
      }
      
      if(dataType === 'book' || dataType === 'audiobook')
      {
        item.style.setProperty('background-image', `url(${data.results[i].coverimages[1]})`)
      }
      else
      {
        if(`url(${data.results[i].coverimages[1]})` === undefined)
          item.style.setProperty('background-image', `url(${data.results[i].coverimages[0]})`)
        else
          item.style.setProperty('background-image', `url(${data.results[i].coverimages})`)
      }
    });
  }