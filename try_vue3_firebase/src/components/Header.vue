<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <p>/</p>
    <router-link to="/setting">Setting</router-link>
    <User />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import User from "./User.vue"

export default defineComponent({
  name: "Header",
  components: {
    User
  }
})
</script>

<style scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0;
}
p {
  margin: 0 5px;
}
</style>
