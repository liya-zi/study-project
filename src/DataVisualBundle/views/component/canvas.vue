<template>
  <div class="canvans-demo">
    <div class="">canvas--绘制层次关系图demo</div>
    <div class="canvans-content">
      <h1 id="canvasTitle"></h1>
      <canvas ref="canvasDemo1" width="712" height="712"></canvas>
    </div>
  </div>
</template>

<script>
import { mockData } from "@/mock/canvasDemo/demo1.js";
import * as d3 from "d3";

export default {
  data() {
    return {
      context: null,
      TAU: 2 * Math.PI,
      handleData: [],
      clickNodeName: ""
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    // 初始化
    initCanvas() {
      console.log("初始化canvas");
      let canvas = this.$refs.canvasDemo1;
      this.context = canvas.getContext("2d");
      const rootdata = mockData;
      this.dataHandle(rootdata);
      // 绑定鼠标事件
      canvas.onclick = e => {
        const x = e.offsetX;
        const y = e.offsetY;
        this.moseHandle(x, y, this.handleData);
        const canvasTitle = document.getElementById("canvasTitle");
        canvasTitle.textContent = this.clickNodeName;
      };
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
      this.draw(root);
    },
    // 画图
    draw(node, { fillStyle = "rgba(0, 0, 0, 0.2)", textColor = "white" } = {}) {
      const children = node.children;
      const { x, y, r } = node;
      this.context.fillStyle = fillStyle;
      this.context.beginPath();
      this.context.arc(x, y, r, 0, this.TAU);
      this.context.fill();
      if (children) {
        for (let i = 0; i < children.length; i++) {
          this.draw(children[i]);
        }
      } else {
        const name = node.data.name;
        this.context.fillStyle = textColor;
        this.context.font = "1.5rem Arial";
        this.context.textAlign = "center";
        this.context.fillText(name, x, y);
      }
    },
    // 鼠标点击事件处理
    moseHandle(mx, my, node) {
      console.log("canvas click node:", node.data.name);
      const children = node.children;
      if (children) {
        const { x, y, r } = node;
        if ((my - y) * (my - y) + (mx - x) * (mx - x) < r * r) {
          console.log("点击的外层节点", node, x, y);
          this.clickNodeName = node.parent
            ? `${node.parent.data.name}-${node.data.name}`
            : node.data.name;
        }
        for (let i = 0; i < children.length; i++) {
          this.moseHandle(mx, my, children[i]);
        }
      } else {
        const { x, y, r } = node;
        if ((my - y) * (my - y) + (mx - x) * (mx - x) < r * r) {
          console.log("点击内层节点", node, x, y);
          this.clickNodeName = node.parent
            ? `${node.parent.data.name}-${node.data.name}`
            : node.data.name;
          this.clearCircle(x, y, r);
          this.draw(node, { fillStyle: "rgba(0, 128, 0, 0.2)" });
        } else {
          this.clearCircle(x, y, r);
          this.draw(node, { fillStyle: "rgba(0, 0, 0, 0.5)" });
        }
      }
    },
    // 清除圆
    clearCircle(x, y, r) {
      // // this.context.strokeStyle = "rgba(255,0,0,1)";

      // this.context.strokeStyle = "rgba(0, 128, 0, 0.1)";
      this.context.beginPath();
      // this.context.clearRect(x, x, r, r);
      this.context.arc(x, y, r, 0, this.TAU);
      this.context.fill();
      this.context.restore();
    }
  }
};
</script>

<style lang="stylus" scoped>
.canvans-demo{
  .canvans-content{
     #canvasTitle {
      position: absolute;
      width: 620px;
      text-align: center;
    }
  }
}
</style>
