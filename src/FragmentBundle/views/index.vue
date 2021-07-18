<template>
  <div class="fragment-container">
    <div class="every-card" v-for="(item, index) in homeData" :key="index">
      <div class="card-title">{{ item.title }}</div>
      <router-link :to="item.router">
        <div class="card-detail">模块详情22</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      homeData: [
        { title: 'Es6-module', summary: '', router: '/es6' },
        { title: 'D3-module', summary: '', router: '/es6' },
        { title: 'Fragment-module', summary: '', router: '/es6' },
        { title: 'Webpack-module', summary: '', router: '/es6' },
        { title: 'Http-module', summary: '', router: '/es6' }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.home-container {
   margin 10px 40px
   padding 10px 15px
   display flex
   flex-wrap wrap
   .every-card{
    text-align center
    margin-right 20px
    margin-bottom 20px
    width 300px
    border-radius 20px
    border 1px solid rgba(21,122,251,0.2)
    .card-title {
      display flex
      align-items center
      justify-content center
      border-radius 20px
      height 160px
      background linear-gradient(to top,rgba(21,122,251,0.2),rgba(21,122,251,0.6))
      margin-bottom 20px
    }
    a {
    background-color #fff
    height auto
    }
    .card-detail{
       background  rgba(21,122,251,0.5)
       margin 15px auto
       color #333
       border-radius 10px
    }
   }
}
</style>
