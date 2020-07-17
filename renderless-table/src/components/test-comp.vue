<template>
  <div>
    A simple template for {{ bundler }}
  </div>
</template>

<script>
export default {
  name: 'TestComp',
  data () {
    return {
      bundler: 'Parcel.JS'
    }
  }
}
</script>

<style scoped>
div {
  margin-top: 24px;
}
</style>
