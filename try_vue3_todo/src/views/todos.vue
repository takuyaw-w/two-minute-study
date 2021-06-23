<template>
  <h2>TODO一覧</h2>
  <ul>
    <li v-for="todo in todoStore.state.todos" :key="todo.id">
      {{ todo.title }}
    </li>
  </ul>
  <router-link to="/new">新規作成</router-link>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { key } from '@/store/todo'

export default defineComponent({
  setup() {
    const todoStore = inject(key)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    return {
      todoStore
    }
  },
})
</script>
