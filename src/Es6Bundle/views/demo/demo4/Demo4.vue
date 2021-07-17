<template>
  <div class="container">
    <div class="title">字符串的扩展</div>
    <div class="content">
      <div class>
        <h2>模板字符串</h2>
        <p>模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。</p>
        <el-popover placement="top-start" title width trigger="hover">
          <div class="popover-box">
            <img src="../imgs/demo4-1.png" alt />
          </div>
          <el-button slot="reference" @click="outModelEs5">es5-输出模板字符串</el-button>
        </el-popover>
        <el-popover placement="top-start" title width trigger="hover">
          <div class="popover-box">
            <img src="../imgs/demo4-2.png" alt />
          </div>
          <el-button slot="reference" @click="outModelEs6">es6-输出模板字符串</el-button>
        </el-popover>
        <div class ref="model" v-html="modelString">{{modelString}}</div>
        <div style="marginTop: 20px">
          <b>我们在使用模板字符串的过程中需要注意以下方面：</b>
          <p>（一）如果在模板字符串中需要使用反引号，则前面要用反斜杠转义</p>
          <p>（二）如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中</p>
          <p>（三）模板字符串中如果要引入变量的话，要用 ${变量名} 这样的形式引入才可以</p>
          <p>（四）大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性</p>
          <p>（五）如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。</p>
        </div>
      </div>
      <div>
        <h2>标签模板</h2>
        <el-popover placement="top-start" title width trigger="hover">
          <div class="popover-box">
            <img src="../imgs/demo4-3.png" alt />
          </div>
          <p slot="reference">
            定义：模板字符串可以紧跟在一个函数名后面(只能跟在后面)，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。
            标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。
          </p>
        </el-popover>
        <div style="marginTop: 20px">
          <h3>标签模板”的应用</h3>
          <p>一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。</p>
          <el-input v-model="inputVal" placeholder="请输入内容" style="width: 150px"></el-input>
          <i class="el-icon-search" @click="filterInputVal"></i>
          <div class>输入内容特殊符号转译： {{filterInput}}</div>
        </div>
      </div>

      <div style="marginTop: 20px">
        <h2>字符串扩展-新增方法</h2>
        <p>传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法:</p>
        <h4>* includes()：返回布尔值，表示是否找到了参数字符串</h4>
        <h4>* startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。</h4>
        <h4>* endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。</h4>
        <p>let s = 'Hello world!';</p>
        <ul>
          <li>
            s.startsWith('Hello')
            <i class="el-icon-check"></i>
          </li>
          <li>
            s.endsWith('!')
            <i class="el-icon-check"></i>
          </li>
          <li>
            s.includes('o')
            <i class="el-icon-check"></i>
          </li>
          <li>
            s.startsWith('world', 6)
            <i class="el-icon-check"></i>
          </li>
          <li>
            s.endsWith('Hello', 5)
            <i class="el-icon-check"></i>
          </li>
          <li>
            s.includes('Hello', 6)
            <i class="el-icon-close"></i>
          </li>
        </ul>
        <h4>* repeat（）：返回布尔值，表示是否找到了参数字符串</h4>
        <p>repeat方法返回一个新字符串，表示将原字符串重复n次。</p>
        <ul>
          <li>'x'.repeat(3) // "xxx"</li>
          <li>'hello'.repeat(2) // "hellohello"</li>
          <li>'na'.repeat(0) // ""</li>
          <li>'na'.repeat(2.9) // "nana" 小数取整：</li>
          <li>'na'.repeat(Infinity) 报错</li>
          <li>'na'.repeat(-1) 报错</li>
          <li>'na'.repeat(-0.9) // "" 0 到-1 之间的小数，等同于 0, 先取整</li>
        </ul>

        <h4>* padStart()：用于头部补全</h4>
        <h4>* padEnd()用于尾部补全</h4>
        <p>padStart和padEnd接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串</p>
        <ul>
          <li>'x'.padStart(5, 'ab') // 'ababx'</li>
          <li>'x'.padEnd(5, 'ab') // 'xabab'</li>
          <li>'x'.padStart(4) // ' x' 省略第二个参数，默认使用空格补全长度</li>
        </ul>
        <h5>padStart的常见用途</h5>
        <p>为数值补全指定位数:</p>
        <p>'1'.padStart(10, '0') // "0000000001";</p>
        <p>'12'.padStart(10, '0') // "0000000012"</p>
        <p>提示字符串格式:</p>
        <p>'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"</p>
        <p>'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"</p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo4",

  data() {
    return {
      name: "lili",
      age: "18",
      modelString: "",
      inputVal: "",
      filterInput: "",
    };
  },
  methods: {
    outModelEs5() {
      // 模板字符串
      // es5
      this.modelString =
        "Es5: He is <b>" +
        this.name +
        "</b>" +
        "and we wish to know his" +
        this.age +
        ".That is all";
    },
    outModelEs6() {
      // es6
      this.modelString = `Es6: He is <b>${this.name}</b>and we wish to know his${this.age}.that is all`;
    },
    filterInputVal() {
      this.filterInput = this
        .filterInputs`he input ${this.inputVal} ；has sent  a message.`;
    },
    filterInputs(templateData) {
      var s = templateData[0];
      for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        // Escape special characters in the substitution.
        s += arg
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        // Don't escape special characters in the template.
        s += templateData[i];
      }
      return s;
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

  .popover-box {
    width: 100%;
    height: 100%;
    // img{
    // width :200px;
    // }
  }
}
</style>
