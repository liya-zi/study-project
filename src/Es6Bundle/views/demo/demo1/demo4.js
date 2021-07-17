// 不能访问arguments
// es5
function hello() {
    console.log(arguments);
}
hello([1, 2, 3]);

let hello2 = (...nums) => {
    console.log(nums);
}
hello2({ a: 2 })

// 对象中的方法
let cat = {
    lives: 9,
    jumps: () => {
        this.lives--;
    }
}
cat.jumps();
console.log('cat1', cat.lives);

// es5
let cat2 = {
    lives: 9,
    jumps: function () {
        this.lives--;
    }
}
cat2.jumps();
console.log('cat2', cat2.lives);


// 带有动态上下文的回调函数
// 如果上下文是动态的，那么这时箭头函数就不是一个正确的选择了。看一个事件捕获的例子：
// 点击按钮，将会报 TypeError 的错误。因为 this 并没有绑定到 button，而是父级作用域。
var button = document.getElementById('press');
button.addEventListener('click', () => {
    this.classList.toggle('on');
    // this.textContent = 'Loading...';
});

// 不能通过new关键字调用
const Message = (text) => {  
    this.text = text;
};
var helloMessage = new Message('Hello World!');  
console.log(helloMessage.text); //-> Message is not a constructor

// 不适合构造函数定义
function Foo() {
    this.bar = 1;
}
Foo.prototype.fn = () => console.log(this.foo);

const foo = new Foo();
foo.fn();  //-> undefined
// this 并不是指向 Foo，根据变量查找规则，回溯到了全局作用域
 

// 不能自我调用;所以递归、事件绑定再解绑，这些情况就不能使用箭头函数

// vue里不能使用箭头函数的例子
// 箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例

// watch:{
//     price:(newVal,oldVal)=>{
//       this.priceBak = newVal;
//       console.log(this.priceBak);//undefined
//     }
//   }

// watch:{
//     price:function(newVal,oldVal){
//       this.priceBak = newVal;
//       console.log(this.priceBak);
//     }
//   }

// 1.不应该使用箭头函数来定义一个生命周期方法
// 2.不应该使用箭头函数来定义 method 函数
// 3.不应该使用箭头函数来定义计算属性函数
// 4.不应该对 data 属性使用箭头函数
// 5.不应该使用箭头函数来定义 watcher 函数