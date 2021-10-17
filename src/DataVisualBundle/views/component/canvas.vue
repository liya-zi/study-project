<template>
  <div class="canvans-demo">
    <div class="">canvas--绘制层次关系图demo</div>
    <div class="">
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
      handleData: []
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
      canvas.onclick = (e) => {
        const x = e.offsetX;
        const y = e.offsetY;
        this.moseHandle(x, y, this.handleData);
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
      const children = node.children;
      if (children) {
        for (let i = 0; i < children.length; i++) {
          this.moseHandle(mx, my, children[i]);
        }
      } else {
        const { x, y, r } = node;
        if ((my - y) * (my - y) + (mx - x) * (mx - x) < r * r) {
          console.log(x, y);
          this.draw(node, { fillStyle: "rgba(255,0,0,0.2)" });
          // this.clearCircle(x, y, r);
          // this.context.fillStyle = "rgba(255,0,0,0.2)";
          // this.context.beginPath();
          // this.context.arc(x, y, r, 0, this.TAU);
          // this.context.fill();
          // const name = node.data.name;
          // this.context.fillStyle = "white";
          // this.context.font = "1.5rem Arial";
          // this.context.textAlign = "center";
          // this.context.fillText(name, x, y);
        } else {
          // this.clearCircle(x, y, r);
          // this.context.fillStyle = "rgba(0, 0, 0, 0.2)";
        }
      }
    },
    // 清除圆
    clearCircle(x, y, r) {
      console.log("清除clearCircle");
      this.context.save();
      this.context.fillStyle = "rgba(255,255,255,255)";
      // this.context.fillStyle = "rgba(0, 0, 0, 0.2)";
      this.context.beginPath();
      this.context.arc(x, y, r, 0, this.TAU);
      this.context.fill();
      this.context.restore();
    }
  }
};
</script>

<style lang="stylus" scoped>
.canvans-demo{

}
</style>
