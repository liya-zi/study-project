<template>
  <div>
    This is page Foo.
  </div>
</template>

<script>

export default {
  name: 'Demo3Foo',
  beforeRouteLeave(to, from, next) {
    // eslint-disable-next-line no-console
    console.log('beforeRouteLeave')
    next()
  }
}
</script>

<style lang="stylus" scoped>
</style>
