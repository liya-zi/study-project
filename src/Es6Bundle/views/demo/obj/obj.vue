<template>
  <div class="container">
    <div class="title">对象的扩展</div>
    <div class="content">
      <h2>对象的扩展运算符</h2>
      <p>对象中的扩展运算符(...):用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中</p>
      <p>
        注意点：
        <ul>
          <li>解构赋值必须是最后一个参数，否则会报错。</li>
          <li>解构赋值不会拷贝继承自原型对象的属性</li>
        </ul> 
      </p>
      <h2>属性名表达式</h2>
      <p>es6中定义对象的属性有两种方法</p>
      <h4>1.标识符作为属性名:</h4>
      <p>obj.foo = true;</p>
      <h4>1.用表达式作为属性名:</h4>
      <p>表达式放在方括号之内: let last = 'last word'; obj.[last]: 'world'</p>
      <h2>新增方法：</h2>
      <h3>Object.is()</h3>
      <p>ES5 比较两个值是否相等只有两个运算符：相等运算符（ == ）和严格相等运算符（ === ）。它们都有缺点，前者会自动转换数据类型，后者的 NaN 不等于自身，以及 +0 等于 -0.ES6 提出“Same-value equality”（同值相等）算法，用来解决这个问
题</p>
      <ul>
        <li>
          Object.is('foo', 'foo')
          <i class="el-icon-check"></i>
        </li>
        <li>
          Object.is({}, {})
          <i class="el-icon-close"></i>
        </li>
        <li>
         +0 === -0
          <i class="el-icon-check"></i>
        </li>
        <li>
          Object.is(+0, -0)
          <i class="el-icon-close"></i>
        </li>
        <li>
         NaN === NaN
          <i class="el-icon-close"></i>
        </li>
        <li>
         Object.is(NaN, NaN)
          <i class="el-icon-check"></i>
        </li>
      </ul>
      <h4>js相等算法</h4>
      <p>
        <img src="../imgs/obj1.png" alt />
        <img src="../imgs/obj2.png" alt />
      </p>
       <h3>Object.assign()</h3>
       <p>Object.assign 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。</p>
       <p><b>Object.assign(target, source1, source2); 第一个参数是目标对象，后面的参数都是源对象</b></p>
       <h4>常见用途</h4>
       <p>1.为对象添加属性、方法</p>
       <p>2.克隆对象： function clone(origin) {return Object.assign({}, origin)}</p>
       <p>3.合并多个对象：(target, ...sources) => Object.assign(target, ...sources);</p>
       <p>4.数组的处理:Object.assign([1, 2, 3], [4, 5])  // 结果：[4, 5, 3]， 将数组当成对象处理了</p>
      <h2>属性的遍历</h2>
      <p>ES6 一共有5种方法可以遍历对象的属性</p>
      <ul>
        <li>for...in循环：遍历对象自身的和继承的可枚举的属性（不含 Symbol 属性）。</li>
        <li>Object.keys()：返回一个数组，对象自身的所有可枚举的属性的键名（不含继承的及Symbol属性）。</li>
        <li>Object.getOwnPropertyNames()：返回一个数组，包含对象自身的所有属性（不含Symbol属性，包括不可枚举属性）。</li>
        <li>Object.getOwnPropertySymbols(obj)： 返回一个数组，包含对象自身的所有Symbol属性</li>
        <li>Reflect.ownKeys(obj)： 返回一个数组，包含对象自身的所有属性，不管属性名是Symbol 或字符串，也不管是否可枚举</li>
      </ul>
      <h3>Object.getOwnPropertyDescriptors()</h3> 
      <p>返回某个对象属性的描述对象（descriptor）。ES2017 引入了 Object.getOwnPropertyDescriptors 方法，返回指定对象所有自身属性（非继承属性）的描述对象。</p>
      <p>
         <img src="../imgs/obj3.png" alt />
        <img src="../imgs/obj4.png" alt />
      </p>
    <h4>Object.getOwnPropertyDescriptors用途</h4>
    <p>主要可以解决 Object.assign() 无法正确拷贝 get 属性和 set 属性</p>
    <p>
         <img src="../imgs/obj5.png" alt />
    </p>
    <p>原因：Object.assign 方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。</p>
    <p>解决方法：Object.getOwnPropertyDescriptors 方法配合 Object.defineProperties 方法，就可以实现正确拷贝</p>
    <p>
         <img src="../imgs/obj6.png" alt />
    </p>
    <h3>Object.setPrototypeOf()</h3>
    <p>Object.setPrototypeOf 方法的作用与 __proto__ 相同，用来设置一个对象的 prototype 对象，返回参数对象本身。它是 ES6 正式推荐的设置原型对象的方法。</p>
    <p>格式:Object.setPrototypeOf(object, prototype)</p>
    <p>eg: 将一个对象设置为另一个对象的原型：</p>
    <p>
       <img src="../imgs/obj7.png" alt />
    </p>
    <h3>Object.keys()，Object.values()，Object.entries()</h3>
    <p>
      上述三个方法都返回数组：Object.keys：属性的键名、Object.values()：属性的键值、Object.entries()：键值对数组
    </p>
    <p> Object.entries({ foo: 'bar', baz: 42 }); // [ ["foo", "bar"], ["baz", 42] ]</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo4",

  data() {
    return {
      findFnVal1: { name: "lili", age: "0" },
      findFnVal2: { name: "lili", age: "1" },
    };
  },
  methods: {
    objFn1(len, val) {
      this.fromFnVal1 = Array.from({ length: len }, () => val);
    },
     
  },
};
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
