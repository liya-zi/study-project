<template>
  <div class="svg-demo">
    <div class="">svg--绘制层次关系图demo</div>
    <div class="svg-content">
      <h1 id="title"></h1>
      <svg
        style="width:800px;height:800px"
        ref="svgDemo1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      ></svg>
    </div>
  </div>
</template>

<script>
import { mockData } from "@/mock/canvasDemo/demo1.js";
import * as d3 from "d3";

export default {
  data() {
    return {
      svgroot: null,
      TAU: 2 * Math.PI,
      handleData: []
    };
  },
  mounted() {
    this.initSvg();
  },
  methods: {
    // 初始化
    initSvg() {
      console.log("初始化initSvg");
      this.svgroot = this.$refs.svgDemo1;
      const rootdata = mockData;
      this.dataHandle(rootdata);
      let activeTarget = null;
      const titleEl = document.getElementById("title");
      this.svgroot.addEventListener("click", evt => {
        let target = evt.target;
        console.log("svg target:", target.nodeName, target);
        if (target.nodeName === "text") target = target.previousSibling;
        if (activeTarget !== target) {
          if (activeTarget)
            activeTarget.setAttribute("fill", "rgba(0, 0, 0, 0.2)");
        }
        target.setAttribute("fill", "rgba(0, 128, 0, 0.1)");
        titleEl.textContent = this.getTitle(target);
        activeTarget = target;
      });
    },
    getTitle(target) {
      const name = target.getAttribute("data-name");
      if (target.parentNode && target.parentNode.nodeName === "g") {
        const parentName = target.parentNode.getAttribute("data-name");
        return `${parentName}-${name}`;
      }
      return name;
    },
    // 数据处理
    dataHandle(data) {
      const regions = d3
        .hierarchy(data)
        .sum(() => {
          return 1;
        })
        .sort((a, b) => b.value - a.value);
      const pack = d3
        .pack()
        .size([600, 600])
        .padding(3);
      const root = pack(regions);
      console.log("d3数据...handle", root);
      this.handleData = root;
      this.draw(this.svgroot, root);
    },
    // 画图
    draw(
      parent,
      node,
      { fillStyle = "rgba(0, 0, 0, 0.2)", textColor = "white" } = {}
    ) {
      const children = node.children;
      const { x, y, r } = node;
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", r);
      circle.setAttribute("fill", fillStyle);
      circle.setAttribute("data-name", node.data.name);
      parent.appendChild(circle);
      if (children) {
        const group = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g"
        );
        for (let i = 0; i < children.length; i++) {
          this.draw(group, children[i], { fillStyle, textColor });
        }
        group.setAttribute("data-name", node.data.name);
        parent.appendChild(group);
      } else {
        const text = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "text"
        );
        text.setAttribute("fill", textColor);
        text.setAttribute("font-family", "Arial");
        text.setAttribute("font-size", "1.5rem");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("x", x);
        text.setAttribute("y", y);
        const name = node.data.name;
        text.textContent = name;
        parent.appendChild(text);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.svg-demo{
  .svg-content{
     #title {
      position: absolute;
      width: 620px;
      text-align: center;
    }
  }
}
</style>
