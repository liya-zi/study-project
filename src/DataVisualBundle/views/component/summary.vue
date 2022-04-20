<template>
  <div>
    <div class="">
      <h2>svg简单动画demo1-缩放、旋转</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="10"
          y="10"
          width="40"
          height="20"
          style="stroke: #000000; fill: none;"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            from="1"
            to="4"
            begin="0s"
            dur="4s"
            repeatCount="indefinite"
            additive="sum"
          ></animateTransform>
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 30 20"
            to="360 30 20"
            begin="0s"
            dur="4s"
            fill="freeze"
            repeatCount="indefinite"
            additive="sum"
          ></animateTransform>
        </rect>
      </svg>
      <h2>svg简单动画demo2-沿路径动画</h2>
      <svg width="500" height="150">
        <path
          d="M10,50 q60,50 100,0 q60,-50 100,0"
          style="stroke: #000000; fill: none;"
        ></path>

        <rect
          x="0"
          y="0"
          width="30"
          height="15"
          style="stroke: #ff0000; fill: none;"
        >
          <animateMotion
            path="M10,50 q60,50 100,0 q60,-50 100,0"
            begin="0s"
            dur="10s"
            rotate="auto"
            repeatCount="indefinite"
          ></animateMotion>
        </rect>
      </svg>
    </div>
    <div class="">
      <div>
        <a
          class="canvas-a"
          href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API"
        >
          canvas--文档：https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API</a
        >
      </div>

      <canvas ref="canvasAnimDemo1" width="500" height="500"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.requestAnimationFrame(this.initCanvas);
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      let canvas = this.$refs.canvasAnimDemo1;
      let ctx = canvas.getContext("2d");
      //旋转角度变量
      let angle = 0;
      //缩放倍数分母变量
      let s = 0;
      let flag = 1;
      if (!canvas.getContext) return;
      setInterval(function() {
        //清除画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //旋转角度变量变化
        angle += 10;
        if (angle == 360) {
          angle = 0;
        }
        //保存样式
        ctx.save();
        //开启新路径
        ctx.beginPath();
        //移动图形原点到画布中心点
        ctx.translate(200, 200);
        //旋转
        ctx.rotate((angle * Math.PI) / 180);
        //缩放
        s += flag;
        if (s == 10) {
          flag = -1;
        } else if (s == 0) {
          flag = 1;
        }
        ctx.scale(s / 10, s / 10);
        //绘制图像
        ctx.moveTo(75, 40);
        ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
        ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
        ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
        ctx.fillStyle = "red";
        ctx.fill();
        //恢复样式
        ctx.restore();
      }, 1000);
    }
  }
};
</script>

<style></style>
