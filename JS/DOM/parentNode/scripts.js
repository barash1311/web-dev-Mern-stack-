//selecting emement
const selected = document.querySelector('[data-item="fruit"]');
console.log(selected);
//navigated to parent
const parent = selected.parentNode;
console.log(parent);
//
const grandparent = parent.parentNode;
console.log(grandparent);
const superparent = grandparent.parentNode;
console.log(superparent);
