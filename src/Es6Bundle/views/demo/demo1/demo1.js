// this指向1: hello是全局函数，没有直接调用它的对象，也没有使用严格模式，this指向window;严格模式指向undefine
function hello() {
    // 'use strict';
    console.log(this);  // window ；
}
// hello();

// 一般函数this指向2:hello直接调用者是obj，第一个this指向obj，setTimeout里匿名函数没有直接调用者，this指向window
const obj = {
    num: 10,
    hello2: function () {
        console.log(this);    // obj
        setTimeout(function () {
            console.log(this, this.num);    // window  undefined
        });
    }
}
obj.hello2();


// 箭头函数里this指向3：
const obj3 = {
    num: 10,
    hello: function () {
        let time = '9:00';
        console.log(this);    // obj
        setTimeout(() => {
            console.log(this, this.num);    // obj 10
        });
    }
}
// obj3.hello();

// 一般函数和箭头函数区别
function foo1() {
    setTimeout(function () {
        console.log('id:', this.id);
    }, 100);
}
foo1.call({ id: 42 });

// function foo2() {
//     setTimeout(() => {
//         console.log('id:', this.id);
//     }, 100);
// }
// foo2.call({ id: 42 });

// foo2函数转成es5:
// function foo2() {
//     var _this = this;
//     setTimeout(() => {
//         console.log('id:', _this.id);
//     }, 100);
// }
// foo2.call({ id: 42 });

// 箭头函数可以让 setTimeout 里面的 this ，绑定定义时所在的作用域，而不是指向运行时所在的作用域

// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;
//     // 箭头函数
//     setInterval(() => this.s1++, 1000);
//     // 普通函数
//     setInterval(function () {
//         this.s2++;
//     }, 1000);
// }
// var timer = new Timer();
// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);

// 上面代码中， Timer 函数内部设置了两个定时器，分别使用了箭头函数和普通函数。前者的 this 绑定定义时所在的作用域（即 Timer 函数），后者的 this 指向运行时所在的作用域（即全局对象）。所以，3100毫秒之后， timer.s1 被更新了3次，而 timer.s2 一次都没更新。

// var handler = {
//     id: '123456',
//     init: function () {
//         document.addEventListener('click',
//             event => this.doSomething(event.type), false);
//     },
//     doSomething: function (type) {
//         console.log('Handling ' + type + ' for ' + this.id);
//     }
// };

// const arr = [1, 2, 3]; console.log(...arr); // 1 2 3

// // es5
// let arr1 = [10, 20];
// let arr2 = arr1.concat();
// console.log(arr2);   // [ 10, 20 ]

// // es6
// let arr1 = [10, 20];
// let arr2 = [...arr1];
// console.log(arr2);   // [ 10, 20 ]

// // es5
// let arr1 = [10, 20];
// let arr2 = [30, 40];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);   // [ 10, 20, 30, 40 ]

// es6
// let arr1 = [10, 20];
// let arr2 = [30, 40];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);   // [ 10, 20, 30, 40 ]
// arr1[0] = 222;
// console.log(arr1, arr3);

// let arr1 = [{user: 'tom'}];
// let arr2 = [{user: 'jack'}];
// let arr3 = arr1.concat(arr2);
// let arr4 = [...arr1, ...arr2];
// console.log(arr1[0] === arr3[0]);   // true
// console.log(arr1[0] === arr4[0]);   // true
// arr1[0].user = 'tom2';
// console.log(arr3[0], arr4[0]); // { user: 'tom2' } { user: 'tom2' }

// let add = (a, b) => a + b;
// let arr = [10, 20];
// // es5
// let result = add.apply(null, arr);
// // es6
// let result2 = add.apply(...arr);   // 30
// console.log(result);   // 30

// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
// // ES5的写法
// var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
// // ES6的写法
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']

// function sumArguments() {
//     return Array.from(arguments).reduce((sum, num) => sum + num);
// }
// console.log(sumArguments(1, 2, 3));  // 6

// // NodeList对象
// let ps = document.querySelectorAll('p');
// Array.from(ps).forEach(function (p) {
//     console.log(p);
// });

// // arguments对象
// function foo() {
//     var args = Array.from(arguments);
//     // ...
//     }

const length = 3;
const resultA = Array.from({ length }, () => ({}));
const resultB = Array(length).fill({});
resultA; // => [{}, {}, {}]
resultB; // => [{}, {}, {}]
console.log(resultA[0] === resultA[1]); // false
console.log(resultB[0] === resultB[1]); // true

resultB[0] = { first: 1 };
console.log(resultB);

console.log(Array.of());

function ArrayOf() {
    return [].slice.call(arguments);
}
console.log(ArrayOf(3));

for (let index of ['a', 'b'].keys()) {
    console.log(index);  // 0 // 1
}

for (let elem of ['a', 'b'].values()) {
    console.log(elem); // 'a' // 'b'
}

for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index, elem);  // 0 "a"  // 1 "b"
}


// let letter = ['a', 'b', 'c'];
// let entries = letter.entries();
// console.log(entries.next().value); // [0, 'a']
// console.log(entries.next().value); // [1, 'b']
// console.log(entries.next().value); // [2, 'c']

// const obj = {
//     foo: 123,
//     get bar() { return 'abc' }
// };
// console.log(Object.getOwnPropertyDescriptors(obj));
// // { foo:
// // { value: 123,
// // writable: true,
// // enumerable: true,
// // configurable: true },
// // bar:
// // { get: [Function: bar],
// // set: undefined,
// // enumerable: true,
// // configurable: true } }

// function getOwnPropertyDescriptors(obj) {
//     const result = {};
//     for (let key of Reflect.ownKeys(obj)) {
//         result[key] = Object.getOwnPropertyDescriptor(obj, key);
//     }
//     return result;
// }

// const source = {
//     set foo(value) {
//         console.log(value);
//     }
// };
// const target1 = {};
// Object.assign(target1, source);
// console.log(target1); // { foo: undefined }

// const source = {
//     set foo(value) {
//         console.log(value);
//     }
// };
// const target2 = {};
// Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source));
// console.log(target2); // { foo: [Setter] }

let proto = {};
let obj = { x: 10 };
Object.setPrototypeOf(obj, proto);
proto.y = 20;
proto.z = 40;
console.log(obj.x, obj.y, obj.z); // 10, 20, 40

let proto = {};
let obj = { x: 10 };
protoFn(obj, proto);
proto.y = 20;
proto.z = 40;
console.log(obj.x, obj.y, obj.z); // 10, 20, 40
function protoFn(obj, proto) {
    obj.__proto__ = proto;
    return obj;
}

// const m = new Map();
// const o = {p: 'Hello World'};
// m.set(o, 'content')
// m.get(o) // "content"
// m.has(o) // true
// m.delete(o) // true
// m.has(o) // false
// // 数组作为参数:该数组的成员表示键值对的数组
// const map = new Map([
//     ['name', '张三'],
//     ['title', 'Author']
// ]);
// map.size // 2
// map.has('name') // true
// map.get('name') // "张三"
// map.has('title') // true
// map.get('title') // "Author"

// const map = new Map();
// map.set(['a'], 555);
// map.get(['a']) // undefined
// console.log(map, map.set, map.has(['a']));
// map转成数组
const myMap = new Map()
    .set(true, 7)
    .set({ foo: 3 }, ['abc']);
console.log([...myMap]);
console.log(Array.from(myMap));
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]

// // 数组转成map
// new Map([
//     [true, 7],
//     [{ foo: 3 }, ['abc']]
// ])
// // Map {
// // true => 7,
// // Object {foo: 3} => ['abc']
// // }

// var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
// var myMap2 = new Map(myMap1); 
// console.log(myMap1 === myMap2); 
// // false; Map 对象构造函数生成实例，迭代出新的对象。

// var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
// var second = new Map([[1, 'uno'], [2, 'dos']]);
// // 合并两个 Map 对象时，如果有重复的键值，则后面的会覆盖前面的，对应值即 uno，dos， three
// var merged = new Map([...first, ...second]);
// console.log(merged); // { 1 => 'uno', 2 => 'dos', 3 => 'three' }

let fn, bar; // 1、进入全局上下文环境
bar = function (x) {
    let b = 5;
    console.log('b', b);
    fn(x + b); // 3、进入fn函数上下文环境
    console.log('b2', b);
};
fn = function (y) {
    let c = 5;
    console.log(c);
    console.log(y + c); //4、fn出栈，bar出栈
};

bar(10); // 2、进入bar函数上下文环境

let fn, bar; // 1、进入全局上下文环境
bar = function (x) {
    let b = 5;
    fn(x + b); // 3、进入fn函数上下文环境
};
fn = function (y) {
    let c = 5;
    console.log(y + c); //4、fn出栈，bar出栈
};
bar(10); // 2、进入bar函数上下文环境


