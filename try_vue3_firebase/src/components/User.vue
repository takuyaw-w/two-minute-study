<template>
  <div v-if="state.isLoggedin" class="user">
    <img class="photoURL" :src="state.photoURL" alt="">
    <h3 class="displayName">Guest</h3>
    <button
        type="button"
        class="button is-small is-info is-outlined"
        @click="signout"
        >
        Sign Out
    </button>
  </div>
  <div v-else class="user">
    <LoginButton />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuthStore } from "../stores/auth"
import LoginButton from "./LoginButton.vue"

export default defineComponent({
  name: "User",
  components: {
    LoginButton
  },
  setup() {
    const { signout, state } = useAuthStore()
    return {
      signout,
      state
    }
  }
})
</script>


<style scoped>
.user {
  margin-left: auto;
  height: 50px;
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
}
.displayName,
button {
  white-space: nowrap;
}
.displayName {
  margin: 0 20px 0 10px;
}
button {
  font-weight: 600;
}
.photoURL {
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
}
</style>
