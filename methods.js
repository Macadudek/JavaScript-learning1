// String Methods
const animal = "cats are great";
//length
console.log(animal.length);
//indexOf
console.log(animal.indexOf('s'));
console.log(animal.indexOf('are'));

//slice
console.log(animal.slice(1));
console.log(animal.slice(0, 8));
console.log(animal.slice(0, -8));

//toUperr / toLower
console.log(animal.toUpperCase());
console.log(animal.toLowerCase());

//concat
console.log(`${animal} (dogs are not)`);
console.log(animal + " (really) ");
console.log(animal.concat(" (definitely) "));

//replace
console.log(animal.replace(/cats/g, "snails"));

//split
console.log(animal.split(" "));


const nummer = 999;
//number methods
console.log(nummer.toString());

//toFixed
console.log(nummer.toFixed(2));

//math.min, math.max
console.log(Math.min(18, 28, 38, 888, 8));
console.log(Math.max(18, 28, 38, 888, 8));

//math.floor, Math.ceil, parseInt
console.log(Math.ceil(839.00001));
console.log(Math.floor(839.999));
console.log(parseInt(839.999));

//array methods
const arrayMethods = [1, 2, 3];

const arrayMethods2 = [4, 5, 6];
//concat
console.log(arrayMethods.concat(arrayMethods2));

//slice
console.log(arrayMethods.slice(1));
console.log(arrayMethods.slice(0, 2));
console.log(arrayMethods.slice(-2));

//pop, push (add remove from end)

let arrayMeth = arrayMethods.pop();
arrayMethods.pop();
console.log(arrayMethods, arrayMeth);
arrayMethods.push(2);
arrayMethods.push(arrayMeth);
console.log(arrayMethods);

//shift, unshift (add remove from beginning)
arrayMeth = arrayMethods.shift();
arrayMethods.shift();
console.log(arrayMethods, arrayMeth);
arrayMethods.unshift(2);
arrayMethods.unshift(arrayMeth);
console.log(arrayMethods);

//splice
const deleted = arrayMethods.splice(1, 2);
console.log(deleted);
console.log(arrayMethods)