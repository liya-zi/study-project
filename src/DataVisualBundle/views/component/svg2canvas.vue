<template>
  <div class="svg-demo">
    <div class="">原svg画图</div>
    <div class="svg-content" id="svgDemo2">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <circle
          cx="100"
          cy="50"
          r="40"
          stroke="black"
          stroke-width="2"
          fill="red"
        />
      </svg>
    </div>
    <div>将svg转为图片--canvas画</div>
    <div id="canvasDemo2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.testToImg();
    this.testToImgDemo2();
  },
  methods: {
    testToImg() {
      const svgXml = document.getElementById("svgDemo2").innerHTML;
      const image = new Image();
      //给图片对象写入base64编码的svg流
      console.log("svgzzzzz,", svgXml);
      image.src =
        "data:image/svg+xml;base64," +
        window.btoa(unescape(encodeURIComponent(svgXml)));
      // 准备画布
      const canvas = document.createElement("canvas");
      canvas.width = 150;
      canvas.height = 150;
      // 取得画布的2d绘图上下文
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);
      const canvasObj = document.getElementById("canvasDemo2");
      canvasObj.appendChild(canvas);
    },
    testToImgDemo2() {
      let svg = document.createElement("SVG");
      svg.setAttribute("style", "background: #eee");
      svg.setAttribute("width", "200");
      svg.setAttribute("height", "200");
      svg.setAttribute("version", "1.1");
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("cx", 100);
      circle.setAttribute("cy", 50);
      circle.setAttribute("r", 40);
      circle.setAttribute("fill", "red");
      svg.appendChild(circle);
      const image = new Image();
      // 给图片对象写入base64编码的svg流
      image.src =
        "data:image/svg+xml;base64," +
        window.btoa(unescape(encodeURIComponent(svg.outerHTML)));
      // 准备画布
      const canvas = document.createElement("canvas");
      canvas.width = 200;
      canvas.height = 200;
      // 取得画布的2d绘图上下文
      const context = canvas.getContext("2d");
      //清除画布
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0);
      const canvasObj = document.getElementById("canvasDemo2");
      canvasObj.appendChild(canvas);
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
