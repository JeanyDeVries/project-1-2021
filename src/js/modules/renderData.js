import { checkState } from "./states.js";

const listItems = document.getElementsByClassName("result");

export function render(data) {
   checkState('showResults');

    const results = data.results;
    results.forEach((item, i) => {
       listItems[i].style.backgroundImage  = `url(${item.coverimages[1]})`
    });
  }