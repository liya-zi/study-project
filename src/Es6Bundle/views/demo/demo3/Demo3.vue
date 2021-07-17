<template>
  <div class="container">
    <div class="title">Demo3</div>
    <div class="content">
      <button @click="outModel">输出模板字符串</button>
      <div class ref="model" v-html="modelString">{{modelString}}</div>
    </div>
    <div class="example">
      <div class="route-banner">
        <router-link to="/demo3/foo">go to foo</router-link>
        <router-link to="/demo3/bar">go to bar</router-link>
      </div>
      <div class="route-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo3",

  data() {
    return {
      name: "lili",
      age: "18",
      modelString: '',
    };
  },
  methods: {
    outModel() {
      // 模板字符串

      // es5
      // this.modelString=
      //   "He is <b>" +
      //     this.name +
      //     "</b>" +
      //     "and we wish to know his" +
      //     this.age +
      //     ".That is all"
      // 

      // es6
  this.modelString =
        `He is <b>${this.name}</b>and we wish to know his${this.age}.that is all`;
    },
  },


  // 标签模板

  // 新的方法

  // let s = 'Hello world!';
  // s.startsWith('Hello') // true
  // s.endsWith('!') // true
  // s.includes('o') // true

  // 这三个方法都支持第二个参数，表示开始搜索的位置。

  // let s = 'Hello world!';
  
  // s.startsWith('world', 6) // true
  // s.endsWith('Hello', 5) // true
  // s.includes('Hello', 6) // false

};
</script>

<style lang="stylus" scoped>
.route-container {
  margin: 30px 0;
  padding: 20px;
  width: 700px;
  height: 118px;
  border: 1px solid #EEEEEE;
}
</style>
