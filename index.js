const myMoney = 300;
const myFriendsMoney = 200 + 20;
const totalMoney = myMoney + myFriendsMoney;


if (myMoney > myFriendsMoney) {
    console.log('I am rich');
} else if(myMoney > 200){
    console.log('I am doing OK');
} else if(myMoney > 100){
    console.log('I am not doing OK');
} else {
    console.log('I am poor');
}



let myName= 'Marcel';
let myFriendsName = "Pepa";
let myLastName = 'Dudek';

console.log(myName[5]);

console.log(`${myName} Dudek`);



const myFirstName = 'Marcel';
const myAge = 23;

const fullName = `${myFirstName} Dudek`;

console.log(fullName);

console.log(`Hello my name is ${fullName}`);

const aaronsAge = 28;

if (myAge > aaronsAge) {
    console.log('I\'m older than Aaron');
} else if (myAge === aaronsAge) {
    console.log('I\'m same age as Aaron');
} else if (myAge < aaronsAge) {
    console.log('I\'m younger than Aaron');
}


const isEven = (myAge % 2) === 0;

if (isEven) {
    console.log('Even');
} else {
    console.log('Odd');
}

let activeUserCount = 2;

if (activeUserCount === 1) {
    console.log(`There is ${activeUserCount} active user`);
} else if (activeUserCount > 1) {
    console.log(`There are ${activeUserCount} active users`);
} else if (activeUserCount < 1) {
    console.log(`There is ${activeUserCount} active users`);
}


const number = 7;

if (number === 1) {
    console.log(number + 'st');
} else if (number <= 2) {
    console.log(number + 'nd');
} else if (number <= 3) {
    console.log(number + 'rd');
} else {
    console.log(number + 'th');
}

const nums = [20, 23, 25];

console.log(nums.length);
console.log(nums[0]);

nums.push([30, 45]);

console.log(nums);

const last = nums.pop();

console.log(nums);
console.log(last);

nums[0] = 88;

console.log(nums[0]);


const product = {
    name: "shiny shoes",
    brand: "gucci",
    price: 100,
    color: "black",
    soldOut: false,
    sale: true,
    tags: ["men", "luxury"],
  };
  
  product.soldOut = true;
  
  console.log(product.name, product.brand, product.price);
  
  console.log(product);

  var numbers = [1, 2, 3];
  var index = 1;
  numbers[index] = 4;

  console.log(numbers)

  var user = {
    name: "Tom",
    age: 25,
    socialMedia: {
        twitter: "https://"
    }
};

const users = [
    {
        name: "Marcel",
        age: 23,
        tags: ['parkour', 'handstands']
    },
    {
        name: "Devon",
        age: 30,
        tags: ['calisthenicsr', 'superchill']
    },
    {
        name: "Alex",
        age: 32,
        tags: ['gamer', 'nerd']
    },
];



let name;
console.log(name);

const logInInfo = {
    name: 'Johny',
    ccNum: null
}

console.log(logInInfo.age);

console.log(10 + logInInfo.age);

let cislo = 0;
let jmeno = 'Marcel';

let cisloAndJmeno = cislo === 0 || jmeno === 'Marcel';

console.log(cisloAndJmeno);

if (cisloAndJmeno) {
    console.log('this was true');
} else {
    console.log('this was false');

}