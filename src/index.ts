import "./style.css";
import data from './data/data.json';

const { items } = JSON.parse(data);
console.log('item1 is', items[0]);
console.log('item2 is', items[2]);

// Fetch the items from the JSON file
// function loadItems() {
//   return fetch('./data/data.json')
//     .then(response => response.json())
//     .then(json => json.items);
// }

// Update the list with the given items
function displayItems(items: any[]) {
  const container = document.querySelector('.items') as HTMLUListElement;
  container.innerHTML = items.map((item: any) => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item: any) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event: any, items: any) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item: any) => item[key] === value));
}

function setEventListeners(items: any) {
  const logo = document.querySelector('.logo') as HTMLImageElement;
  const buttons = document.querySelector('.buttons') as HTMLElement;
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
displayItems(items);
setEventListeners(items);
// loadItems()
//   .then(items => {
//     displayItems(items);
//     setEventListeners(items);
//   })
//   .catch(console.log);

