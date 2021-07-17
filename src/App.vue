<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

body
  margin: 0

a
  display: inline-block
  width: 140px
  height: 36px
  line-height: 36px
  color: #FFFFFF
  background-color: #3EAF7C
  text-align: center
  text-decoration: none
  border-radius: 6px
  &:hover
    background-color: rgba(62, 175, 124, .8)
  & + a
    margin-left: 22px

.container
  .title
    margin: 10px 0 20px
    padding: 0 10px
    font-size: 24px
    font-weight: bold
    color: #3EAF7C
    border-left: 4px solid #3EAF7C
  .content
    margin: 20px 0;
    color: #333333
    text-indent: 45px;
    line-height: 30px;
  .example
    display: flex
    flex-direction: column
    align-items: center
</style>
