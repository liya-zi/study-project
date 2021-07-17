<template>
  <div>
    This is page Bar.
  </div>
</template>

<script>

export default {
  name: 'Demo2Bar',
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
