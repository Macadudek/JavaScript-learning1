function devideByTwo(num) {
    const twoDevided = num / 2; 
    return (Math.floor(twoDevided));
  } 

let callOne = devideByTwo(10);
let callTwo = devideByTwo(25);
let callThree = devideByTwo(1235);
console.log(callOne);
console.log(callTwo);
console.log(callThree);


function myfunction(testOne) {
    let varFirstLetter = testOne[0];
    let varToUpper = (varFirstLetter.toUpperCase());
    return varToUpper + (testOne.slice(1));
}

let firstOne = myfunction('hello');
let secondOne = myfunction('world');
let thirdOne = myfunction('i love javascript');
console.log(firstOne);
console.log(secondOne);
console.log(thirdOne);


const stringOne = 'i love javascript';

console.log(stringOne.indexOf('j'));
console.log(stringOne.indexOf('z'));

console.log(stringOne.slice(7));
console.log(stringOne.slice(2, 6));

console.log(stringOne.replace(/javascript/g, "HTML"));

console.log(stringOne.split(" "));


const num = 1000;

const numString = num.toFixed(2);
const twoDec = numString.toString();
console.log("$" + twoDec);

const myArr = [1, 2, 3, 4 ];
console.log(myArr.slice(2));

myArr.push(5, 6);

console.log(myArr);


const deleted = myArr.splice(3, 2);
console.log(deleted)
console.log(myArr)


function timesTwo(n) {
    n * 2
}
var n = timesTwo(2);

console.log(n);

console.log("i like dogs".indexOf("dog"));

var firstName = "Aaron";
var middleName = "Jack";

console.log("My name is ".concat(firstName).concat(" ").concat(middleName));

var nums = [ 1, 2, 3 ].map( function(num) {
    return num + num;
} );

console.log(nums)