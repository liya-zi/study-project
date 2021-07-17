<template>
  <div class="container">
    <div class="title">Map数据结构</div>
    <div class="content">
      <h2>Map含义</h2>
      <p>
        类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
        Object
        结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的
        Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
      </p>
      <ul>
        Maps 和 Objects 的区别
        <li>
          一个 Object 的键只能是字符串或者 Symbols，但一个 Map
          的键可以是任意值。
        </li>
        <li>Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。</li>
        <li>
          Map 的键值对个数可以从 size 属性获取，而 Object
          的键值对个数只能手动计算。
        </li>
        <li>
          Object
          都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。
        </li>
      </ul>
      <p>
        map结构基本用法：
        <img src="../imgs/map1.png" alt />
      </p>
      <h2>map实例的属性和操作方法</h2>
      <p>1.size属性：size 属性返回 Map 结构的成员总数。</p>
      <p>
        2.set(key, value):设置键名 key 对应的键值为 value ，然后返回当前的整个
        Map 结构;可以采用链式写法
      </p>
      <p>3.get(key):读取 key 对应的键值，如果找不到 key ，返回 undefined</p>
      <p>4.has(key):返回一个布尔值，表示某个键是否在当前 Map 对象之中。</p>
      <p>5.delete(key):删除某个键，返回 true 。如果删除失败，返回 false 。</p>
      <p>6.clear():清除所有成员，没有返回值</p>

      <h3>Map 对象的操作</h3>
      <p>1.Map 与 Array的转换</p>
      <p>
        前面已经提过，Map 转为数组最方便的方法，就是使用扩展运算符（ ...
        ）、或Array.from。 将数组传入 Map 构造函数，就可以转为 Map。
        <img src="../imgs/map2.png" alt />
      </p>
      <p>2.Map 的克隆</p>
      <p>
        <img src="../imgs/map3.png" alt />
      </p>
      <p>3.Map 的合并</p>
      <p>
        <img src="../imgs/map4.png" alt />
      </p>
      <p>1.WeakSet 的成员只能是对象，而不能是其他类型的值</p>
      <p>
        eg: const ws = new WeakSet();ws.add(1) ; ws.add(Symbol()) ; //
        TypeError: invalid value used in weak set
      </p>
      <p>2.WeakSet 中的对象都是弱引用:</p>
      <p>
        即垃圾回收机制不考虑 WeakSet
        对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存
      </p>
      <p>
        WeakSet 适合临时存放一组对象;成员是不适合引用的，因为它会随时消失;因此
        ES6 规定 WeakSet 不可遍历
      </p>
      <h4>
        WeakSet用途:用WeakSet储存DOM
        节点，不用担心这些节点从文档移除时，会引发内存泄漏。
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo4',

  data() {
    return {
      setFnVal1: null,
      setFnVal2: null,
      setFnVal3: null,
      setFnVal4: null,
      setFnVal5: null,
      setFnVal6: null,
      setFnVal7: null,
      setFnVal8: null,
      setFnVal9: null,
      setFnVal10: null
    };
  },
  methods: {
    setFn1() {
      this.setFnVal1 = [2, 3, 5, 4, 5, 2, 2].forEach((x) => x.add(x));
    },
    setFn2() {
      this.setFnVal2 = [...new Set([3, 5, 2, 2, 5, 5])];
    },
    setFn3() {
      let a = new Set([1, 2, 3]);
      let b = new Set([4, 3, 2]);
      this.setFnVal3 = [...new Set([...a, ...b])];
    },
    setFn4() {
      let a = new Set([1, 2, 3]);
      let b = new Set([4, 3, 2]);
      this.setFnVal4 = [...new Set([...a].filter((x) => b.has(x)))];
    },
    setFn5() {
      let a = new Set([1, 2, 3]);
      let b = new Set([4, 3, 2]);
      this.setFnVal5 = [...new Set([...a].filter((x) => !b.has(x)))];
    },
    setFn6() {
      this.setFnVal2 = [...new Set([3, 5, 2, 2, 5, 5])];
    },
    setFn7() {
      this.setFnVal2 = [...new Set([3, 5, 2, 2, 5, 5])];
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
}
</style>
