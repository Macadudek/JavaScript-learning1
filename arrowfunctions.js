//arrow functions - normal functions expressions converted into a shorter syntax only ES6 version of JS

//step 1 normal funcion
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(2));

//functions expression
const addTwo2 = function (num) {
    return num + 2;
}
console.log(addTwo2(2));

//arrow function
const addTwo3 = num => num + 2; 
console.log(addTwo3(2));

//two variables
const addBothNums = (first, second) => first + second;

console.log(addBothNums(2, 2));

//more complicated one
const doubleUntilOver1000 = num => {
    while (num < 1000) {
        num *= 2;
    }
    return num;
}
console.log(doubleUntilOver1000(50));

//HIGHER ORDER ARRAY METHODS

const nums = [1, 2, 3, 4, 5];

//find (similar to for loop)
//const found = nums.find(item => {
//    console.log(item, "ran function");
//});

const found = nums.find(num => {
    console.log(num);
    if (num > 2) {
        return true;
    }
});
console.log(found);

//some, every
const ages = [21, 13, 42, 50];

const hasMinors = ages.some(age => {
    if (age < 18) {
        return true;
    }
});

console.log(hasMinors);

//every
const allOver18 = ages.every(age => {
    console.log(age);
    if (age >= 18) {
        return true;
    }
});
console.log(allOver18);

//forEach (stored in a variable always returns undefined) show index of a value and in which array it is stored
let highestAge = 0;

ages.forEach((age, index, arr) => {
    console.log(age, index, arr);
});

//map always creates a copy
const newAges = ages.map(age => age / 2);

console.log(newAges);

const newAges2 = ages.map(age => {
    if (age > 40) {
        return "boomer"
    } else {
        return "zoomer"
    }
});

console.log(newAges2);

//filter

const boomers = ages.filter(age => {
    if (age > 40) {
        return true;
    }
})
const zoomers = ages.filter(age => {
    if (age < 40) {
        return true;
    }
})
console.log(boomers, zoomers);

//sort (sorts in chronical order [4, 6, 2, 4] becomes [2, 4, 4, 6]) CHANGES the variable itself works on names as well

const agesSort = [21, 42, 50, 18];
const namesSort = ['Marcel', 'Anna', 'Hedvika', 'Devon'];

agesSort.sort();
console.log(agesSort);
namesSort.sort();
console.log(namesSort);

//reduce
const result = ages.reduce((sum, age) => {
    console.log(sum, age);
    const total = sum + age;
    console.log(total);
    return total;
});

//can be made shorter
const result2 = ages.reduce((sum, age) => sum + age);

console.log(result);
console.log(result2);
//if we pass a value before the last round bracket that value will assign into the first sum value, if we pass nothing the first number in our array will be assigned there




var multiplyNumbers = function(num1, num2) {
    var sum = 0;
    for(let i = 0; i < num1; i++)
      sum += num2;
    console.log(sum);
    return sum 
  };

  