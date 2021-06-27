<template>
  <h2>TODO一覧</h2>
  <div v-if="error">
    {{ error.message }}
  </div>
  <Suspense v-else>
    <template #default>
      <AsyncTodos />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
  <router-link to="/new">新規作成</router-link>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from 'vue'
import AsyncTodos from '@/components/AsyncTodos.vue'

export default defineComponent({
  components: {
    AsyncTodos
  },
  setup() {
    const error = ref<unknown>(null)

    onErrorCaptured((e) => {
      error.value = e
      return true
    })

    return {
      error
    }
  }
})
 </script>
