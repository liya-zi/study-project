<template>
  <div>
    This is page Foo.
  </div>
</template>

<script>

export default {
  name: 'Demo2Foo',
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.$router)
    // eslint-disable-next-line no-console
    console.log(this.$route)
  }
}
</script>

<style lang="stylus" scoped>
</style>
