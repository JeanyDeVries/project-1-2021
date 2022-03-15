const listItems = document.getElementsByClassName("result");

export function render(data) {
    const results = data.results;
    console.log(results)
    results.forEach((item, i) => {
       listItems[i].style.backgroundImage  = `url(${item.coverimages[1]})`
    });
  }