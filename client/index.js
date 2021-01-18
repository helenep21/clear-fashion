// Invoking strict mode https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode
'use strict';

console.log('🚀 This is it.');

const MY_FAVORITE_BRANDS = [{
  'name': 'Hopaal',
  'url': 'https://hopaal.com/'
}, {
  'name': 'Loom',
  'url': 'https://www.loom.fr'
}, {
  'name': 'ADRESSE',
  'url': 'https://adresse.paris/'
}]

console.table(MY_FAVORITE_BRANDS);
console.log(MY_FAVORITE_BRANDS[0]);

/**
 * 🌱
 * Let's go with a very very simple first todo
 * Keep pushing
 * 🌱
 */

// 🎯 TODO: The cheapest t-shirt
// 0. I have 3 favorite brands stored in MY_FAVORITE_BRANDS variable
// 1. Create a new variable and assign it the link of the cheapest t-shirt
// I can find on these e-shops
// 2. Log the variable
const cheapest =  'https://www.loom.fr/products/le-t-shirt';
console.log(cheapest);




/**
 * 👕
 * Easy 😁?
 * Now we manipulate the variable `marketplace`
 * `marketplace` is a list of products from several brands e-shops
 * The variable is loaded by the file data.js
 * 👕
 */

// 🎯 TODO: Number of products
// 1. Create a variable and assign it the number of products
// 2. Log the variable
const nb_products = marketplace.length;
console.log(nb_products);

// 🎯 TODO: Brands name
// 1. Create a variable and assign it the list of brands name only
// 2. Log the variable
// 3. Log how many brands we have*
var brand_names=[];
var i;
for (i=0; i < nb_products;i++){
  if(brand_names.includes(marketplace[i].brand) == false){
    brand_names.push(marketplace[i].brand)
  }
};
console.log(brand_names);
console.log(brand_names.length);

// 🎯 TODO: Sort by price
// 1. Create a function to sort the marketplace products by price
// 2. Create a variable and assign it the list of products by price from lowest to highest
// 3. Log the variable
function SortPrice(){
  var marketSorted = [];
  var j;
  for(j=0;j < nb_products;j++){
    var temp =[marketplace[j].price,marketplace[j].name,marketplace[j].brand,marketplace[j].link,marketplace[j].date];
    marketSorted.push(temp);
  }
  marketSorted.sort(function(a,b){
    return a[0] - b[0];
  });
  return marketSorted;
}
const SortedPrice = SortPrice();
console.log(SortedPrice);

// 🎯 TODO: Sort by date
// 1. Create a function to sort the marketplace objects by products date
// 2. Create a variable and assign it the list of products by date from recent to old
// 3. Log the variable
function SortDate(){
  var marketSortedDate = [];
  var j;
  var dateFormat;
  for(j=0;j < nb_products;j++){
    dateFormat = marketplace[j].date.toString();
    var temp =[new Date(dateFormat),marketplace[j].name,marketplace[j].brand,marketplace[j].price,marketplace[j].link];
    marketSortedDate.push(temp);
  }
  marketSortedDate.sort(function(a,b){
    return b[0] - a[0];
  });
  return marketSortedDate;
}
const SortedDate = SortDate();
console.log(SortedDate);

// 🎯 TODO: Filter a specific price range
// 1. Filter the list of products between 50€ and 100€
// 2. Log the list
function FilterPrice(min,max){
  var priceFilter = [];
  var j;
  for(j=0;j < nb_products;j++){
    var temp =marketplace[j];
    if(temp.price > min && temp.price < max){
      priceFilter.push(temp);
    }
  }
  return priceFilter;
}
const FilteredPrice = FilterPrice(50,100);
console.log(FilteredPrice);

// 🎯 TODO: Average Basket
// 1. Determine the average basket of the marketplace
// 2. Log the average
var avrg = 0;
for(i=0;i < nb_products;i++){
  avrg+= marketplace[i].price;
}
avrg = Math.round(avrg / nb_products);
console.log(avrg);




/**
 * 🏎
 * We are almost done with the `marketplace` variable
 * Keep pushing
 * 🏎
 */

// 🎯 TODO: Products by brands
// 1. Create an object called `brands` to manipulate products by brand name
// The key is the brand name
// The value is the array of products
//
// Example:
// const brands = {
//   'brand-name-1': [{...}, {...}, ..., {...}],
//   'brand-name-2': [{...}, {...}, ..., {...}],
//   ....
//   'brand-name-n': [{...}, {...}, ..., {...}],
// };
//
// 2. Log the variable
// 3. Log the number of products by brands
const brands = {}
var i;
var prodB;
for(i=0;i< brand_names.length;i++){
  prodB=[];
  var j;
  for(j=0;j<nb_products;j++){
    if(marketplace[j].brand == brand_names[i]){
      var product=[marketplace[j].name,marketplace[j].price,marketplace[j].link,marketplace[j].date];
      prodB.push(product);
    }
  }
  brands[brand_names[i]] = prodB;
}
console.log(brands);
var k;
var qtB = "";
for(var b in brands){
  qtB = b+ " : "+ brands[b].length +" products";
  console.log(qtB);
}




// 🎯 TODO: Sort by price for each brand
// 1. For each brand, sort the products by price, from highest to lowest
// 2. Log the sort
for(var b in brands){
  brands[b]=brands[b].sort(function(a1,a2){
    return a1[1] - a2[1];
  });
};
console.log(brands);

// 🎯 TODO: Sort by date for each brand
// 1. For each brand, sort the products by date, from old to recent
// 2. Log the sort

for(var b in brands){
  brands[b]=brands[b].sort(function(a1,a2){
    a1[3]=new Date(a1[3].toString());
    a2[3]=new Date(a2[3].toString());
    return a1[3] - a2[3];
  });
};
console.log(brands);



/**
 * 💶
 * Let's talk about money now
 * Do some Maths
 * 💶
 */

// 🎯 TODO: Compute the p90 price value
// 1. Compute the p90 price value of each brand
// The p90 value (90th percentile) is the lower value expected to be exceeded in 90% of the products
var brand90=[];
for(const b in brands){
  var b_price=[];
  var idx = Math.round(0.9 * brands[b].length) - 1; 
  for(var i in brands[b]){
    b_price.push(brands[b][i][1]);
  }
  b_price.sort(function(a, b){return a-b});
  brand90.push([b,b_price[idx]]);
}
console.log(brand90);




/**
 * 🧥
 * Cool for your effort.
 * It's almost done
 * Now we manipulate the variable `COTELE_PARIS`
 * `COTELE_PARIS` is a list of products from https://coteleparis.com/collections/tous-les-produits-cotele
 * 🧥
 */

const COTELE_PARIS = [
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-gris',
    price: 45,
    name: 'BASEBALL CAP - TAUPE',
    uuid: 'af07d5a4-778d-56ad-b3f5-7001bf7f2b7d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-navy',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - NAVY',
    uuid: 'd62e3055-1eb2-5c09-b865-9d0438bcf075',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-fuchsia',
    price: 110,
    name: 'VESTE - FUCHSIA',
    uuid: 'da3858a2-95e3-53da-b92c-7f3d535a753d',
    released: '2020-11-17'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-baseball-cap-camel',
    price: 45,
    name: 'BASEBALL CAP - CAMEL',
    uuid: 'b56c6d88-749a-5b4c-b571-e5b5c6483131',
    released: '2020-10-19'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-beige',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BEIGE',
    uuid: 'f64727eb-215e-5229-b3f9-063b5354700d',
    released: '2021-01-11'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-veste-rouge-vermeil',
    price: 110,
    name: 'VESTE - ROUGE VERMEIL',
    uuid: '4370637a-9e34-5d0f-9631-04d54a838a6e',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/la-chemise-milleraie-bordeaux',
    price: 85,
    name: 'CHEMISE MILLERAIE MIXTE - BORDEAUX',
    uuid: '93d80d82-3fc3-55dd-a7ef-09a32053e36c',
    released: '2020-12-21'
  },
  {
    link: 'https://coteleparis.com//collections/tous-les-produits-cotele/products/le-bob-dylan-gris',
    price: 45,
    name: 'BOB DYLAN - TAUPE',
    uuid: 'f48810f1-a822-5ee3-b41a-be15e9a97e3f',
    released: '2020-12-21'
  }
]

// 🎯 TODO: New released products
// // 1. Log if we have new products only (true or false)
// // A new product is a product `released` less than 2 weeks.
for(var product in COTELE_PARIS){
  var dateProduct = new Date(COTELE_PARIS[product].released);
  var now = new Date();
  const diffTime = Math.abs(now - dateProduct);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  if(diffDays < 14){
    console.log(COTELE_PARIS[product]);
  }  
}

// 🎯 TODO: Reasonable price
// // 1. Log if coteleparis is a reasonable price shop (true or false)
// // A reasonable price if all the products are less than 100€
var reasonable = true;
for(var product in COTELE_PARIS){
  if(COTELE_PARIS[product].price > 99){
    reasonable = false;
  }
}
if(reasonable==true){
  console.log("reasonable prices");
}
else{
  console.log("unreasonable prices");
}


// 🎯 TODO: Find a specific product
// 1. Find the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the product
var uuidS = 'b56c6d88-749a-5b4c-b571-e5b5c6483131';
let uuidProduct = COTELE_PARIS.find(o => o.uuid === uuidS);
console.log(uuidProduct);

// 🎯 TODO: Delete a specific product
// 1. Delete the product with the uuid `b56c6d88-749a-5b4c-b571-e5b5c6483131`
// 2. Log the new list of product
var idxDeleteProduct = COTELE_PARIS.indexOf(uuidProduct);
COTELE_PARIS.splice(idxDeleteProduct,1);
console.log(COTELE_PARIS);

// 🎯 TODO: Save the favorite product
let blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// we make a copy of blueJacket to jacket
// and set a new property `favorite` to true
let jacket = blueJacket;
jacket.favorite = true;

// 1. Log `blueJacket` and `jacket` variables
// 2. What do you notice?
console.log(blueJacket);
console.log(jacket);
// they both have the propery favorite set to true

blueJacket = {
  'link': 'https://coteleparis.com/collections/tous-les-produits-cotele/products/la-veste-bleu-roi',
  'price': 110,
  'uuid': 'b4b05398-fee0-4b31-90fe-a794d2ccfaaa'
};

// 3. Update `jacket` property with `favorite` to true WITHOUT changing blueJacket properties
jacket = Object.assign({}, blueJacket,{'favorite':true});
console.log(jacket);
console.log(blueJacket);
// this time, blueJacket hasn't been updated



/**
 * 🎬
 * The End
 * 🎬
 */

// 🎯 TODO: Save in localStorage
// 1. Save MY_FAVORITE_BRANDS in the localStorage
// 2. log the localStorage
localStorage.setItem("favoriteBrands",JSON.stringify(MY_FAVORITE_BRANDS));
console.log(JSON.parse(localStorage.getItem("favoriteBrands")));