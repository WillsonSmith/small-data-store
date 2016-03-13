## ES6 Flux-ish store

or es2015 - whatever you want to call it


Sample code
```
let storeFactory = basicStore();
let carStore = storeFactory.new({
  'inventory': 100,
  'colors': ['red', 'yellow', 'blue']
});
let fruitStore = storeFactory.new();
fruitStore.set('fruits', ['banana', 'apple']);
carStore.set('beep', true);
console.log(carStore.history());
console.log(fruitStore.history());
console.log(storeFactory.history());
console.log(carStore.get('inventory'));
console.log(carStore.get('colors'));
```
