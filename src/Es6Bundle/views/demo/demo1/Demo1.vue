<template>
  <div class="container">
    <div class="title">Demo1</div>
    <div class="content">
      介绍VueRouter的初始化操作，使用router-link及router-view配置页面，再定义路由映射表，
      传入路由配置，并通过Vue.use()初始化路由，通过点击以下按钮跳转值对应路由页面。
    </div>
    <div class="example">
      <div class="route-banner">
        <router-link to="/demo1/foo">go to foo</router-link>
        <router-link to="/demo1/bar">go to bar</router-link>
      </div>
      <div class="route-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// 全局、局部作用域
// var age = 12;
// console.log(name);
// 此处不能调用 name 变量
// function myFn() {
//   var name = "Lili";
//   // 函数内可调用 name、age变量
//   console.log(name, age);
// }

// 块级作用域
// {
//   var num1 = 1;
// }
// {
//   const num2 = 2;
// }
// console.log(num1); // 1
// console.log(num2) // num2 is not defined

// // var varTest;
// var my = console.log(varTest); // 输出undefined

// console.log(my); //输出undefined(注意要注释掉下面一行才能运行)

// var varTest;
// let letTest;
// console.log(varTest); //输出undefined
// console.log(letTest); //输出undefined

// var varTest = 'test var OK.';
// let letTest = 'test let OK.';
// var varTest = 'varTest changed.';
// let letTest = 'letTest changed.'; //直接报错
// console.log(varTest); // 输出varTest changed.
// console.log(letTest);

// {
//   var varTest = 'test var OK.';
//   let letTest = 'test let OK.';
//   {
//     var varTest = 'varTest changed.';
//     let letTest = 'letTest changed.';
//     console.log(varTest); //"varTest changed."
//     console.log(letTest); //"letTest changed."
//   }
//   console.log(varTest); //"varTest changed."
//   console.log(letTest); //"test let OK."
// }

// 块作用域
// {
//   var varTest = "test var OK.";
// }
// (function myFn() {
//   var varTest2 = "test var OK2.";
//   console.log(varTest); // test var OK.
//   console.log(varTest2); // test var OK2.
// })();
// console.log(varTest); // test var OK.
// console.log(varTest2); // 报错

//变量提升
// function fn(val) {
//   var value;
//   if (val) {
//     value = "test";
//     return value;
//   } else {
//     console.log(value); // undefined
//   }
//   console.log(value); // undefined
// }
// fn(false);

// 变量提升案例
// function fn() {
//   // 变量提升案例一 // 结果：1秒后输出10个10
//   for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//       console.log("变量提升案例一", i);
//     }, 1000);
//   }
//   // 变量提升案例二 // 结果：1秒后输出0，1，2，3，4，5，6，7，8，9
//   for (let j = 0; j < 10; j++) {
//     setTimeout(() => {
//       console.log("变量提升案例二", j);
//     }, 1000);
//   }

//   // 变量提升案例三  // 结果：1秒后输出0，1，2，3，4，5，6，7，8，9
//   for (var k = 0; k < 10; k++) {
//     let temp = k;
//     setTimeout(() => {
//       console.log("变量提升案例三", temp);
//     }, 1000);
//   }

//   // 案例四 // // 结果：1秒后输出0，1，2，3，4，5，6，7，8，9
//   for (var l = 0; l < 10; l++) {
//     ((l) => {
//       setTimeout(() => {
//         console.log("变量提升案例四", l);
//       }, 1000);
//     })(l);
//   }

//   // 案例五 //  结果：1秒后输出0，1，2，3，4，5，6，7，8，9
//   for (var m = 0; m < 10; m++) {
//     setTimeout(
//       (m) => {
//         console.log("变量提升案例五", m);
//       },
//       1000,
//       m
//     );
//   }
//   // 案例六 // 结果 10
//   var test = [];
//   for (var n = 0; n < 10; n++) {
//     test[n] = function () {
//       console.log("变量提升案例六", n);
//     };
//   }
//   test[6]();
//   // 结果：10
// }
// fn();

// var tmp = 123;
// function myfn() {
//   tmp = 1234; // TDZ 暂时性死区
//   console.log(tmp); // 报错ReferenceError
//   let tmp;
// }
// function myfn(){
//   var x = 1
//   var y = 2
// }
// myfn();
// {
//   const x = 1; // Error: "x" is read-only
//   var x = 3; //Identifier 'x' has already been declared
// }
// // var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;
 
// // let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;
// Object.defineProperty(window, 'pai',{
//     value: 3.14,
//     writable:false,
// })
// console.log(pai); // 3.14
// pai = 3.333;
// console.log(pai); // 3.14


const arr = ['2019', '2020']
arr[1] = '2022';
console.log(arr); // ['2019', '2022']

const obj = {
  name: '2019',
  arr1: ['第一', '第二']
};
myFreeze(obj);
obj.arr1[0] = '第三';
console.log(obj); // {name: '2019', arr1: ['第一', '第二']}
function myFreeze(obj) {
  Object.freeze(obj); // 冻结第一层
  Object.keys(obj).forEach((key) => {
    if(typeof obj[key] === 'object') {
      myFreeze(obj[key])
    }
  })
}




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
