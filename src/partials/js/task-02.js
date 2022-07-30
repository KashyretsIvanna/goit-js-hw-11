const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

console.log(ingredients);

let l = ingredients.map(el => document.createElement('li'));
l.forEach(el => el.classList.add('item'));
l.map(el => (el.innerText = ingredients[l.indexOf(el)]));
console.log(l);
l.forEach(el => {
  console.log(el);
  document.getElementById('ingredients').append(el);
});
