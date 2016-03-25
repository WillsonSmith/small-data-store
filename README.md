## ES6 Flux-ish store

or es2015 - whatever you want to call it


### Sample code
You can create grouped stores under one `smallDataStore()` by using the `.new()` method:
```
let groceryStore = smallDataStore();

let fruitGroceryStore = groceryStore.new({
  'apples': 5,
  'oranges': 10,
  'bananas': 2,
  'purchased': false
});

let meatGroceryStore = groceryStore.new({
  'steak': {
    'hanger': 1
  },
  'porkchop': 5,
  'sausage': 3,
  'purchased': false
});

```
The `.new()` method can be either called with a base object, or with no object as a parameter. In the case no object is passed, it will use an empty object.
You can `get()` and `set()` values for your store
```
let sausageNumber = meatGroceryStore.get('sausage');
console.log(sausageNumber); //3

meatGroceryStore.set('bacon', 7);
console.log(meatGroceryStore.get('bacon')); // 7
```

Alternatively you can `update()` something on your store. Update takes a function which will transform the value you are accessing.
```
meatGroceryStore.update('steak', (grocery) => grocery.tenderloin = 1);
console.log(meatGroceryStore.get('steak')); // {hanger: 1, tenderloin: 1}
```

With grouped stores, they are held in an array that can be accessed with `.storeGroup()` on your original `smallDataStore()`, in this case: `groceryStore`. This allows you to loop through all of them and perform group operations on related stores.
```
console.log(groceryStore.storeGroup()); // [fruitStore, meatStore]
groceryStore.storeGroup().forEach((store) => store.set('purchased', true));

console.log(meatGroceryStore.get('purchased')); // true
console.log(fruitGroceryStore.get('purchased')); // true
```
You can also call `smallDataStore()` directly. Unlike using `.new()`, you _must_ pass an object, otherwise it will expect you to call `.new()`
```
let carStore = smallDataStore({
  'ford': 15,
  'honda': 12,
  'toyota': 16
});

console.log(carStore.keys()); // ['ford', 'honda', 'toyota'];
console.log(carStore.get('ford')); // 15
```

### Running tests
`npm test` will build and run the tests. You will need to have already built `smallDataStore.js` with `npm run babel`.
