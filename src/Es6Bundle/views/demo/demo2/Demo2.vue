<template>
  <div class="container">
    <div class="title">Demo2</div>
    <div class="content">
      介绍VueRouter实例及其结构，钩子函数存储，fallback属性，options值内容，matcher类。
      介绍router实例及其结构，meta、query、params使用逻辑，matched字段含义。
    </div>
    <div class="example">
      ßß
      <div class="route-banner">
        <router-link to="/demo2/foo?test=test">go to foo</router-link>
        <router-link to="/demo2/bar/test">go to bar</router-link>
      </div>
      <div class="route-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// let arr = [1,2,3];
// // 之前
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// // Es6写法
// let [a, b, c] = arr;

// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo,bar,baz);//1,2,3

// let [,,a,,b] = [1,2,3,4,5];
// console.log(a,b);//3,5

// let [a,...reset] = [1,2,3,4,5];
// console.log(a,reset); //1,[2,3,4,5]

// var a = 1, reset = [2, 3, 4, 5];
// console.log(a,reset);//1,[2,3,4,5]

// let [a,...reset] = [1];
// console.log(a,reset);//1,[]
// var _ref = [1],a = _ref[0],reset = _ref.slice(1);
// console.log(a,reset);//1,[]

// let [foo] = 1;//报错
// let [foo1] = false;//报错
// let [foo2] = NaN;//报错
// let [foo3] = undefined;//报错
// let [foo4] = null;//报错
// let [foo5] = {};//报错
// let [a, b, c] = new Set([1, 2, 2, 3]);
// console.log(a, b, c); //1,2,3

// function* fibs() {
//   let a = 0;
//   let b = 1;
//   debugger
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// let [first, second, third, fourth, fifth, sixth] = fibs();
// console.log(first, second, third, fourth, fifth, sixth);
// // 0, 1, 1, 2, 3, 5
// let { foo, bar } = { foo: "aaa", bar: "bbb" };
// console.log(foo, bar); // 'aaa', 'bbb'
// // let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };

// let { foo: first, bar: second } = { foo: "aaa", bar: "bbb" };
// console.log(first, second); // 'aaa', 'bbb', foo is not defined,

// let obj = {name:"lili"};
// let {name,age = 18} = obj;
// console.log(name,age); // "lili",18

// let obj = {p: ["Hello", { y: "World" }]};
// let {p, p: [x, { y }]} = obj;
// console.log(p, x, y); // ["Hello", { y: "World" }], "Hello", "World"

// let node = {
//   loc: {
//     start: {line: 1,column: 5},
//   },
// };
// let { loc, loc: { start }, loc: { start: { line }} } = node;
// console.log(loc, start, line); //{start: Object}, {line: 1, column: 5}, 1

// let {x = 3} = {}; console.log(3); // 3
// var {x = 3} = {x: undefined}; console.log(x); // 3
// var {x = 3} = {x: null};console.log(x); // null

// const [a, b, c, d, e] = 'hello';
// console.log(a,b,c,d,e);//'h','e','l','l','o'

// let {length} = 'hello';
// console.log(length); // 5
// let {toString: s} = 123;
// s === Number.prototype.toString // true
// let {toString: t} = true;
// s === Boolean.prototype.toString // true

//  let x = 1,y = 2;
//  [x, y] = [y, x];
//  console.log(x, y); // 2, 1

// 返回一个数组
// function example() {
//   return [1, 2, 3];
// }
// let [a, b, c] = example();
// console.log(a, b, c); // 1, 2, 3
// // 返回一个对象
// function example2() {
//   return {
//     foo: 1,
//     bar: 2
//   };
// }
// let { foo, bar } = example2();
// console.log(foo, bar); // 1, 2
// function add([x, y]) {
//   return x + y;
// }
// add([1, 2]); // 3
// [[1, 2], [3, 4]].map(([a, b]) => a + b);
// // [ 3, 7 ]

// function move({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }
// console.log(move({ x: 3, y: 8 })); // [3, 8]
// console.log(move({ x: 3 })); // [3, undefined]
// console.log(move({})); // [undefined, undefined]
// console.log(move()); // [0, 0]
// let jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// };
// let { id, status, data: number } = jsonData;
// console.log(id, status, number); // 42, ok,  [867, 5309]
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');
// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }
// // 获取键名
// for (let [key] of map) {
//   console.log(key);
// }
// // first
// // second
// var f = (v) => v;
// // var f = function (v) {
// //   return v;
// // };

// // 正常函数写法
// var result = values.sort(function (a, b) {
//   return a - b;
// });
// var f = () => 5;
// var sum = (num1, num2) => num1 + num2;
// var sum = (num1, num2) => { return num1 + num2; }

// // 报错
// let getTempItem = id => { id: id, name: "Temp" };
// // 不报错
// let getTempItem = id => ({ id: id, name: "Temp" });

// // 箭头函数写法
// var result = values.sort((a, b) => a - b);
// eslint-disable-next-line no-unused-vars
const { SourceMap, SourceNode } = require('source-map');
// eslint-disable-next-line no-unused-vars
function Person() {
  //Person（）构造器定义了`this`指针，指向了其实例本身
  this.age = 0;
  setInterval(function growUp() {
    //在non-strict模式下，growUp()方法定义了‘this’作为一个全局的对象。其
    //不同于Person()构造器生成的‘this’指针
    this.age++;
    console.log(this.age);
  }, 1000);
}
// var p = Person();
// console.log(p);
function show() {
  console.log(this); // window
  console.log(this.a);
}
show(); //一次调用
// eslint-disable-next-line no-undef
show2 = () => {
  console.log('this is', this); // {}
};
// eslint-disable-next-line no-undef
show2();
</script>

<style lang="stylus" scoped>
.route-container {
  margin: 30px 0;
  padding: 20px;
  width: 700px;
  height: 410px;
  border: 1px solid #EEEEEE;
}
</style>
