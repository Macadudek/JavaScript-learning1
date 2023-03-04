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

const firstName = "Marcel";
const lastName = "Dudek";

let wholeName;

if (firstName && lastName) {
    wholeName = `${firstName} ${lastName}`;
}

console.log(wholeName);


var months = ['Jan', 'feb'];

if (months.length && months[0][0] === 'J') {
    console.log(months[0]);
} else {
    months.push('Jan');
}

console.log(months)



var numOfWeeks = 0;

let areNoWeeks;

if (typeof numOfWeeks === 'number') {
  areNoWeeks = Boolean(numOfWeeks);
}

console.log(areNoWeeks);

var isSnowing = false;
if ( !isSnowing ) {
     isSnowing = true;
}


const value = "Marcello";

let aCount = 0;

for (let i = 0; i < value.length; i++) {
    let char = value[i];
    console.log(char);
    if (char === 'l') {
        aCount++;
    }
}

console.log(aCount);


const nameString = 'Marcel'



for (let i = 0; i < nameString.length; i++) {
  let result = nameString[i];
  console.log(result);
}


var cis = 1;
cis + 1;
cis++;
cis += 1;
cis = cis + 1;

console.log(cis)

var task = "Aaron Jack";
for (var i = 0; i < task.length; i++) {
 console.log(i);
}


var names = ['Aaron', 'Jack'];
for (var i = 0; i < names.length; i++) {
    console.log(names[ i ] )
}

var asa = [ 1, 2, 3 ]; 
for (var num of asa) {
  console.log(num);
}

var names8 = ['Aaron', 'Jack'];
for (var i = 0; i < names8.length; i++) {
    console.log( i );
}

const newNum = Number("123");

console.log(newNum, typeof newNum);

