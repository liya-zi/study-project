<template>
  <div>
    This is page Bar.
  </div>
</template>

<script>

export default {
  name: 'Demo3Bar',
  beforeRouteEnter(to, from, next) {
    // eslint-disable-next-line no-console
    console.log('beforeRouteEnter')
    next()
  }
}
</script>

<style lang="stylus" scoped>
</style>
