<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import TodoStore, { key } from '@/store/todo'

export default defineComponent({
  name: "App",
  setup () {
    provide(key, TodoStore)
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
