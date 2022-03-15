const listItems = document.getElementsByClassName("result");

export function render(data) {
    const results = data.results;
    console.log(results)
    results.forEach((item, i) => {
        const html = `
          <img src="${
            item.coverimages ? item.coverimages[1] : 'Geen samenvatting'
          }">
      `
      listItems[i].insertAdjacentHTML('beforeend', html);
    });
  }