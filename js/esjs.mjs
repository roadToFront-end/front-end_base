// JS ES6 cheatsheet

//1. let scope
let x = 10;
if (true) {
    let x = 12;
    console.log(x);
}
console.log(x)

//2. const
const y = 10;
//y = 12; // throws an error

//3. Arrow functions
const sum = (a, b) => a + b;
console.log(sum(10, 12));

//4. Template strings
const lastName = "Pan";
const fullName = `${lastName} Shi`;
console.log(fullName);

//5. spread operator
const a = [10, 12]
const b = [11, 13]
const c = [...a, ...b]
console.log(c);

//6. Destructuring objects
const person = {
    pfullName: "Pan Shi",
    page: 25,
};
//Destructuring
const { pfullName, page } = person; // name="Pan shi" age=25
const { pfullName: personpfullName, page: personpage } = person; // personpfullName="Pan Shi" personpage=25

//7. Destructuring nested objects
const person2 = {
    jonSnow: {
        age: 25,
        phrase: "You know nothing"
    }
};
//Destructuring
const { jonSnow: { age, phrase }} = person2; // age=25 phrase="You know nothing"
const { jonSnow: { age: jonSnowAge, phrase: jonSnowPhrase } } = person2; // jonSnowAge=25 jonSnowPhrase="You know nothing"

//8. Destructuring arrays
const [x1, y1] = [1, 2, 3, 4, 5, 6];
console.log(x1, y1);
const [x2, y2, , , z2] = [1, 2, 3, 4, 5, 6];
console.log(x2, y2, z2);

//9. destructuring with the rest parameter
const [x3, y3, ...arr] = [1, 2, 3, 4, 5, 6];
console.log(x3, y3);
console.log(arr);
console.log(...arr);

//10. javascript promises
/*Promise syntax

const promise = new Promise((resolve, reject) => {
    if （condition here） {
        resolve("promise was fulfilled");
    } else {
        reject("promise was rejected");
    }
});
.then((result) => {...}) // handling a fulfilled promise
.catch((error) => {...}) // handling a rejected promise
*/
function test(resolve, reject) {
    var timeout = Math.random() * 2;
    console.log("set timeout " + timeout + " seconds.");
    setTimeout(function () {
        if (timeout < 1) {
            console.log("call resolve()...");
            resolve("200 OK");
        } else {
            console.log("call reject()...");
            reject("timeout in " + timeout + " seconds.");
        }
    }, timeout * 1000);
}

var p1 = new Promise(test).then(function (r) {
    console.log("Done: " + r);
}).catch (function (reason) {
    console.log("Failed: " + reason);
});

var p2 = p1.then(function (result) {
    console.log("success: " + result);
});
var p3 = p1.catch(function (result) {
    console.log("failed: " + result);
});

new Promise(test).then(function (result) {
    console.log("success-1" + result);
}).catch(function (reason) {
    console.log("failed-1" + reason);
});


let obj = {
    "name": {
        "first": "Pan",
        "last": "Shi"
    }
}

console.log(obj.name?.first);
console.log(obj.name?.first ?? "N/A");
console.log(obj.name?.middle);
console.log(obj.name?.middle ?? "N/A");