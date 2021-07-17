<template>
  <div class="container">
    <div class="title">Set和Map数据结构</div>
    <div class="content">
      <h2>Set基本用法</h2>
      <p>
        Set类似于数组，但是成员的值都是唯一的，没有重复的值。Set
        本身是一个构造函数，用来生成 Set 数据结构。
      </p>
      <p>
        Set 结构不会添加重复的值;eg:向 Set 结构加入成员[2, 3, 5, 4, 5, 2, 2]
      </p>
      <p>
        <el-button @click="setFn1">set</el-button>
        <span>s = new Set([2, 3, 5, 4, 5, 2, 2]) 结果：{{ setFnVal1 }}</span>
      </p>
      <h2>Set 实例的属性和方法</h2>
      <p>Set.prototype.constructor：构造函数，默认就是 Set 函数</p>
      <p>Set.prototype.size：返回 Set 实例的成员总数</p>
      <ul>
        <li>add(value) ：添加某个值，返回Set结构本身。</li>
        <li>delete(value) ：删除某个值，返回一个布尔值，表示删除是否成功。</li>
        <li>has(value) ：返回一个布尔值，表示该值是否为 Set 的成员。</li>
        <li>clear() ：清除所有成员，没有返回值。</li>
        <li>
          keys() ， values() ， entries():返回的都是遍历器对象; 由于 Set
          结构没有键名，只有键值,所以 keys 方法和 values 方法的行为完全一致
        </li>
        <li></li>
      </ul>
      <h3>Set用法：</h3>
      <p>1.数组去重：eg: let unique = [...new Set([3, 5, 2, 2, 5, 5])];</p>
      <p>
        <el-button @click="setFn2">数组去重：</el-button>
        去重结果：{{ setFnVal2 }}
      </p>
      <p>
        2.实现并集（Union）、交集（Intersect）和差集（Difference）；eg: a = new
        Set([1, 2, 3]); b = new Set([4, 3, 2]);
      </p>
      <p>
        <el-popover placement="top-start" title width trigger="hover">
          <div class="popover-box">new Set([...a, ...b])</div>
          <el-button slot="reference" @click="setFn3">a、b并集：</el-button>
        </el-popover>
        并集结果：{{ setFnVal3 }}
      </p>
      <p>
        <el-popover placement="top-start" title width trigger="hover">
          <div class="popover-box">new Set([...a].filter((x) => b.has(x)))</div>
          <el-button slot="reference" @click="setFn4">a、b交集：</el-button>
        </el-popover>
        交集结果：{{ setFnVal4 }}
      </p>
      <p>
        <el-popover placement="top-start" title width trigger="hover">
          <div class="popover-box">
            new Set([...a].filter((x) => !b.has(x)))
          </div>
          <el-button slot="reference" @click="setFn5">a、b差集：</el-button>
        </el-popover>
        差集结果：{{ setFnVal5 }}
      </p>

      <h3>WeakSet</h3>
      <p>
        WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set
        有两个区别。
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
