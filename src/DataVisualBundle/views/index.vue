<template>
  <div class="dataVuisal-container">
    <div class="left-menu">
      <el-menu
        default-active="dataVisualSummary"
        @select="handleSelect"
        class="el-menu-vertical-demo"
      >
        <el-menu-item index="dataVisualSvg">
          svg-demo
        </el-menu-item>
        <el-menu-item index="dataVisualCanvas">
          canvas-demo
        </el-menu-item>
        <el-menu-item index="dataVisualSvg2canvas">
          svg2canvas
        </el-menu-item>
        <el-menu-item index="dataVisualSummary">
          动画
        </el-menu-item>
      </el-menu>
    </div>
    <div class="right-content">
      <div class="card-detail">模块详情</div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "dataVuisal",
  data() {
    return {
      menuRouter: "dataVisualSummary"
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key });
    }
  }
};
</script>

<style lang="stylus" scoped>
.dataVuisal-container {
  margin: 10px 40px;
  padding: 10px 15px;
  display: flex;
   .left-menu{
    margin 20px
  }
  .right-content{
    padding 10px 20px
  }

}
</style>
