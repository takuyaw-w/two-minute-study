<template>
  <div class="hello">
    <h1>Hello, {{ state.isLoggedin ? state.displayName : guest }}</h1>
    <p>This is a example of an article</p>
    <p>Vue3 + Composition API + store pattern + Firebase Auth</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from "../stores/auth"

export default defineComponent({
  name: "Home",
  setup() {
    const guest = "{{ Guest }}"
    const { state } = useAuthStore()
    return {
      guest,
      state
    }
  }
})
</script>
