const hello = () => "Hello World!";
const welcome = () => "Welcome"

const [Hello = hello(), Welcome = welcome()] = [, "Panshi"];

console.log(Hello, Welcome);

const email = "panshi@gmail.com";
const user_name = email.slice(0, email.indexOf("@"));
console.log("email name : ", user_name);

function funCall() {
    const [first, second] = arguments;
    console.log(first, second);
    console.log(arguments);
}

funCall(2, 3);

const product = {
    name: "Book Panshi",
    inStock: true,
    price: 10.99,
    flvavors: ["chocolate", "vanilla"]
}

console.log(product.name);

function diffArrary(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArrary([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function sun(a, b) {
    return a + b;
}

const sum = (a, b) => a + b;

const sum2 = new Function("a", "b", "return a + b");


const items = { "apple": 1, "banana": 2, "orange": 3 };

for (const item in items) {
    console.log(item);
}

Object.entries(items).map(item => {
    console.log(item);
});

Object.entries(items).forEach(item => {
    console.log(item);
});

for (const [key, value] of Object.entries(items)) {
    console.log(key, value);
}

const arr = [1, 2, 3];
const val = 3 in arr;
console.log(val);

var num = 10;
console.log(num.toString(2));
console.log(num.toString(8));   
console.log(num.toString(16));

console.log(parseInt("1010", 2));
console.log(parseInt("12", 8));
console.log(parseInt("a", 16));

console.log(Math.random().toString(36).substring(2));

var acme = acme || {};
acme.engine = "V8";
acme.start = function () {
    console.log("Truck Started.. " + acme.engine);
};

acme.stop = function () {
    console.log("Truck Stopped..");
};

acme.start();
acme.stop();

console.log("Wow it's easy")

var refreshIntervalId = setInterval(() => {
    console.log("Hello")
}, 3);

setTimeout(function(){ clearInterval(refreshIntervalId);}, 6000);