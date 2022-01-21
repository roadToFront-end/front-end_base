# JavaScript 学习之路

---

## JavaScript 笔记

ECMAScript 6.0（以下简称 ES ）是 JavaScript 语言的下一代标准

ES6 是 JavaScipt 的一个标准，JavaScript 是 ES6 的一个实现（（另外的 ECMAScript 方言还有 Jscript 和 ActionScript）。日常场合，这两个词是可以互换的。

## 相关网站

- [Babel is a JavaScript compiler.](https://babel.dev/)
- [抽象语法树 检查器](https://astexplorer.net/)
- [Remark MD 文件处理](https://remark.js.org/)

## [JavaScript ES6 CheatSheet](../js/esjs.mjs)

### 1. `let` 作用域

```javascript
let x = 10;
if (true) {
    let x = 12;
    console.log(x);
}
console.log(x)
```

### 2. `const` 关键字

```javascript
const y = 10;
y = 12; // throws an error
```

### 3. 箭头函数

```javascript
const sum = (a, b) => a + b;
console.log(sum(10, 12));
```

### 4. 模板字符串

```javascript
const lastName = "Pan";
const fullName = `${lastName} Shi`;
console.log(fullName);
```

### 5. 展开语法

```javascript
const a = [10, 12]
const b = [11, 13]
const c = [...a, ...b]
console.log(c);
```

### 6. 解构对象

```javascript
const person = {
    pfullName: "Pan Shi",
    page: 25,
};
//Destructuring
const { pfullName, page } = person; // name="Pan shi" age=25
const { pfullName: personpfullName, page: personpage } = person; // personpfullName="Pan Shi" personpage=25
```

### 7. 解构嵌套对象

```javascript
const person2 = {
    jonSnow: {
        age: 25,
        phrase: "You know nothing"
    }
};
//Destructuring
const { jonSnow: { age, phrase }} = person2; // age=25 phrase="You know nothing"
const { jonSnow: { age: jonSnowAge, phrase: jonSnowPhrase } } = person2; // jonSnowAge=25 jonSnowPhrase="You know nothing"
```

### 8. 字符串解构

```javascript
const [x1, y1] = [1, 2, 3, 4, 5, 6];
console.log(x1, y1);
const [x2, y2, , , z2] = [1, 2, 3, 4, 5, 6];
console.log(x2, y2, z2);
```

### 9. 使用 `...` 进行剩余参数进行解构

```javascript
const [x3, y3, ...arr] = [1, 2, 3, 4, 5, 6];
console.log(x3, y3);
console.log(arr);
console.log(...arr);
```

### 10. Promise 对象

Promise 最大的好处是在异步执行的流程中，把执行代码和处理结果的代码清晰地分离。

#### 10.1 Promise 语法

```javascript
const promise = new Promise((resolve, reject) => {
    if （condition here） {
        resolve("promise was fulfilled");
    } else {
        reject("promise was rejected");
    }
});
.then((result) => {...}) // handling a fulfilled promise
.catch((error) => {...}) // handling a rejected promise
```

#### 10.2 Promise 用法示例

```javascript
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
    console.log("success-1 ：" + result);
}).catch(function (reason) {
    console.log('failed-1：' + reason);
});
```
