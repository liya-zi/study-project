<template>
  <div class="container">
    <div class="title">数组的扩展</div>
    <div class="content">
      <div class>
        <h2>扩展运算符</h2>
        <p>
          含义：扩展运算符（spread）是三个点（ ... ）。它好比 rest
          参数的逆运算，将一个数组转为用逗号分隔的参数序列。扩展运算符背后调用的是遍历器接口（Symbol.iterator）;
          eg: const arr = [1, 2, 3]; console.log(...arr); // 1 2 3
        </p>
        <h3>扩展运算符应用：</h3>
        <div style="marginTop: 10px">
          <b>1.代替函数的apply方法</b>
          <p>
            <img src="../imgs/arr1.png" alt />
          </p>
          <b>2.复制数组</b>
          <p>
            <img src="../imgs/arr2.png" alt />
          </p>
          <b>3.合并数组</b>
          <p>
            <img src="../imgs/arr3.png" alt />
          </p>
          <b>4.数组的复制是浅拷贝</b>
          <p>
            <img src="../imgs/arr4.png" alt />
          </p>
          <b>4.将字符串转为真正的数组</b>
          <p>[...'hello'] // [ "h", "e", "l", "l", "o" ]</p>
        </div>
        <h3>Array.from()</h3>
        <p>
          Array.from
          方法用于将两类对象转为真正的数组：类似数组的对象（array-like
          object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）。
          下面是一个类似数组的对象， Array.from 将它转为真正的数组。
        </p>
        <p>
          <img src="../imgs/arr5.png" alt />
        </p>
        <h4>Array.from 应用</h4>
        <p>1.类数组转换成数组：函数中的 arguments 关键字，一个 DOM 集合</p>
        <p>
          <img src="../imgs/arr6.png" alt />
        </p>
        <h4>2.克隆一个数组</h4>
        <p>
          const numbers = [1, 2, 3]; const numbersCopy = Array.from(numbers);
        </p>
        <h4>3.初始化数组</h4>
        <p>
          当初始化数组的每个项都应该是一个新对象时，Array.from()
          是一个更好的解决方案
        </p>
        <p>获取一个m长度的都是n的数组，不用循环实现：</p>
        <p>
          <el-button @click="fromFn1(5, 'n')">Array.from</el-button>
          <span>初始化长度为5，值为n: {{ fromFnVal1 }}</span>
        </p>
        <p>
          <el-button @click="fromFn2(5, 'n')">Array.fill</el-button>
          <span>初始化长度为5，值为n: {{ fromFnVal2 }}</span>
        </p>
        <p>
          <img src="../imgs/arr8.png" alt />
        </p>
        <h4>
          4.接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理
        </h4>
        <p>
          <el-popover placement="top-start" title width trigger="hover">
            <div class="popover-box">Array.from(arr, (x) => x * 2)</div>
            <el-button slot="reference" @click="fromFn3">数组处理</el-button>
          </el-popover>
          <span
            >arr1:[1,2,3],arr2等于arr1每项*2: arr1:{{ fromArr1 }}; arr2:
            {{ fromArr2 }}</span
          >
        </p>
        <h3>Array.of()</h3>
        <p>
          Array.of 方法用于将一组值，转换为数组;弥补数组构造函数 Array() 的不足
        </p>
        <p>
          Array() // [];; Array(3) // [, , ,];; Array(3, 11, 8) // [3, 11, 8]
        </p>
        <p>
          Array.of(3, 11, 8) // [3,11,8];; Array.of(3) // [3];;
          Array.of(3).length // 1 ;; Array.of(undefined) // [undefined]
        </p>
        <p><b>function ArrayOf() {return [].slice.call(arguments)}</b></p>
      </div>
      <div style="marginTop: 20px">
        <h2>数组扩展-新增方法</h2>
        <h4>
          *
          copyWithin()：将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组
        </h4>
        <h4>* find() 、findIndex()：返回找出第一个符合条件的数组成员、位置</h4>
        <p>用法1：找出数组中第一个小于 0 的成员 [1, 4, -5, -2]，及其位置</p>
        <p>
          <el-button @click="findFn">打印结果</el-button>
          <span>小于0的成员：{{ findFnVal1 }};</span>
          <span>位置： {{ findFnVal2 }}</span>
        </p>
        <p>用法2： 接受第二个参数，用来绑定回调函数的this对象</p>
        <p>
          <img src="../imgs/arr9.png" alt />
        </p>
        <h4>
          * entries()，keys() 和
          values()：遍历数组，它们都返回一个遍历器对象；keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历
        </h4>
        <p>
          <img src="../imgs/arr10.png" alt />
        </p>
        <h4>
          *
          includes():返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
        </h4>
        <h4>
          *
          flat()、flatMap()：Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维数组。该方法返回一个新数组，对原数据没有影响。
        </h4>
        <p>[1, 2, [3, 4]].flat()</p>
        <p>
          <el-button @click="findFn4">flat</el-button>
          <span>[1, 2, [3, 4]]->{{ flatArr2 }};</span>
          <span>原数组： {{ flatArr1 }}</span>
        </p>
        <p>
          <el-button @click="findFn8">flat</el-button>
          <span>原数组有空位：[1, 2, , 4, 5]-》：{{ flatArr8 }};</span>
          <span>原数组： {{ flatArr7 }}</span>
        </p>
        <p>
          <el-button @click="findFn5">flat</el-button>
          <span>不知道嵌套多少层[1, [2, [3]]] -》：{{ flatArr4 }};</span>
          <span>原数组： {{ flatArr3 }}</span>
        </p>
        <p>
          <el-button @click="findFn6">flat</el-button>
          <span>去掉原数组有空位：[1, 2, , 4, 5]-》：{{ flatArr6 }};</span>
          <span>原数组： {{ flatArr5 }}</span>
        </p>
        <p>
          <el-button @click="findFn7">flatMap</el-button>
          <span
            >对原数组的每个成员执行一个函数：[2, 3, 4]-》：{{
              flatArr10
            }};</span
          >
          <span>原数组： {{ flatArr9 }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo4',

  data() {
    return {
      findFnVal1: '',
      findFnVal2: '',
      fromFnVal1: null,
      fromFnVal2: null,
      fromArr1: '',
      fromArr2: '',
      flatArr1: '',
      flatArr2: '',
      flatArr3: '',
      flatArr4: '',
      flatArr5: '',
      flatArr6: '',
      flatArr7: '',
      flatArr8: '',
      flatArr9: '',
      flatArr10: ''
    };
  },
  methods: {
    fromFn1(len, val) {
      this.fromFnVal1 = Array.from({ length: len }, () => val);
    },
    fromFn2(len, val) {
      this.fromFnVal2 = Array(len).fill(val);
    },
    fromFn3() {
      this.fromArr1 = [1, 2, 3];
      this.fromArr2 = Array.from(this.fromArr1, (x) => x * 2);
    },
    findFn4() {
      this.flatArr1 = [1, 2, [3, 4]];
      this.flatArr2 = this.flatArr1.flat();
    },
    findFn7() {
      this.flatArr9 = [2, 3, 4];
      this.flatArr10 = this.flatArr9.flatMap((x) => [x, x * 2]);
    },
    findFn5() {
      this.flatArr3 = [1, [2, [3]]];
      this.flatArr4 = this.flatArr3.flat(Infinity);
    },
    findFn6() {
      this.flatArr5 = [1, 2, 3, 4, 5];
      this.flatArr6 = this.flatArr5.flat();
    },
    findFn8() {
      this.flatArr7 = [[1, [2, 2], 1]];
      this.flatArr8 = this.flatArr9.flat(1);
    },
    findFn() {
      // es6
      this.findFnVal1 = [1, 4, -5, -2].find((n) => n < 0);
      this.findFnVal2 = [1, 4, -5, -2].findIndex((n) => n < 0);
    }
  }
};
</script>

<style lang="stylus" scoped>
.route-container {
  margin: 30px 0;
  padding: 20px;
  width: 700px;
  height: 410px;
  border: 1px solid #EEEEEE;

  .popover-box {
    width: 100%;
    height: 100%;
    // img{
    // width :200px;
    // }
  }
}
</style>
