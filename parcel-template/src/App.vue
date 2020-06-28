<template>
  <div class="container">
    <h1>{{ message }}</h1>
    <test-comp />
  </div>
</template>

<script>
import TestComp from './components/test-comp.vue'

export default {
  name: 'App',
  components: {
    TestComp
  },
  data() {
    return {
      message: 'Using Parcel In A Vue.js App',
    };
  },
};
</script>

<style scoped>
  .container {
    width: 600px;
    margin: 50px auto;
    text-align: center;
  }
</style>
