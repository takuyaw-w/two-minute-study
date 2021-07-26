<template>
  <div class="view">
    <h1>Setting</h1>
    <div class="updater">
      <label>displayName</label>
      <input type="text" v-model="displayName" />
    </div>
    <div class="updater">
      <label>photoURL</label>
      <input type="text" v-model="photoURL" />
    </div>
    <button @click="update">Update</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useAuthStore } from "../stores/auth"

export default defineComponent({
  name: "Setting",
  setup() {
    const { state, updateUser } = useAuthStore()
    const displayName = ref("");
    const photoURL = ref("")
    const update = () => {
      updateUser({
        displayName: displayName.value,
        photoURL: photoURL.value
      })
    }
    return {
      displayName,
      photoURL,
      update
    }
  },
})
</script>

<style scoped>
.updater {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
label {
  flex: 1;
}
input {
  flex: 3;
}
button {
  float: right;
}
</style>
