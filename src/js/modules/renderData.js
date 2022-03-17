import { checkState } from "./states.js";

let listItems = document.getElementsByClassName("resultBook");
export function render(data, dataType) {
    checkState('showResults');

    //for each datatype are different list items
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
      //If there are no results hide the list item
      if(data.results[i] === undefined || data.results[i] === null){
          item.style.setProperty('display', 'none');
          return;
      }
      
      //Some datatypes use a different value in the array
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