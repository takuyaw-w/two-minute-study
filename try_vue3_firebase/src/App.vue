<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from "./components/Header.vue"

export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/water.css@2/out/dark.min.css"
</style>
