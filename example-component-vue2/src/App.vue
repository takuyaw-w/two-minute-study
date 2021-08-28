<template>
  <div id="app">
    <my-input v-model="val" />
  </div>
</template>

<script>
import MyInput from "./components/MyInput.vue";
export default {
  name: 'App',
  components: {
    MyInput
  },
  data() {
    return {
      val: ""
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
