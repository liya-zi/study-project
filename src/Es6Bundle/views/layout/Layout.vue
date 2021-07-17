<template>
  <el-container>
    <el-header>
      <div class="main-header">
        <img src="@/assets/logo.png" />
        前端基本功修炼06 - ES6入坑(一)
      </div>
    </el-header>
    <el-container class="main-container">
      <el-aside width="250px">
        <el-card class="menu-container" shadow="always">
          <el-menu :default-active="actived" router>
            <el-menu-item index="/demo1">Demo1</el-menu-item>
            <el-menu-item index="/demo2">Demo2</el-menu-item>
            <el-menu-item index="/demo3">Demo3</el-menu-item>
            <el-menu-item index="/demo4">字符串的扩展</el-menu-item>
            <el-menu-item index="/arr">数组的扩展</el-menu-item>
            <el-menu-item index="/obj">对象的扩展</el-menu-item>
            <el-menu-item index="/set">Set数据结构</el-menu-item>
            <el-menu-item index="/map">Map数据结构</el-menu-item>
          </el-menu>
        </el-card>
      </el-aside>
      <el-main>
        <el-card shadow="always">
          <router-view />
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {};
  },
  computed: {
    actived() {
      let actived = "";
      switch (true) {
        case this.$route.path.indexOf("demo1") !== -1:
          actived = "/demo1";
          break;
        case this.$route.path.indexOf("demo2") !== -1:
          actived = "/demo2";
          break;
        case this.$route.path.indexOf("demo3") !== -1:
          actived = "/demo3";
          break;
        case this.$route.path.indexOf("demo4") !== -1:
          actived = "/demo4";
          break;
        case this.$route.path.indexOf("arr") !== -1:
          actived = "/arr";
          break;
        case this.$route.path.indexOf("obj") !== -1:
          actived = "/obj";
          break;
        case this.$route.path.indexOf("set") !== -1:
          actived = "/set";
          break;
        case this.$route.path.indexOf("map") !== -1:
          actived = "/map";
          break;
        default:
          actived = this.$route.path;
      }

      return actived;
    },
  },
};
</script>

<style lang="stylus" scoped>
.main-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  width: 1140px;
  font-size: 22px;
  font-weight: bold;
  color: #333333;

  img {
    margin-right: 15px;
    width: 35px;
  }
}

.main-container {
  margin: 0 auto;
  width: 1140px;
  padding: 20px 0;
  border-top: 1px solid #EEEEEE;
}

.el-header {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.el-aside {
  .el-menu {
    height: 100%;
    border: none;

    .el-menu-item {
      &.is-active {
        color: #3EAF7C;
        background-color: rgba(62, 175, 124, 0.1);
      }

      &:hover {
        background-color: rgba(62, 175, 124, 0.1);
      }
    }
  }
}

.el-main {
  padding: 0 0 0 20px;
}
</style>
