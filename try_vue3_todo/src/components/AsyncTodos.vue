<template>
  <ul>
    <todo-item
      v-for="todo in todoStore.state.todos"
      :key="todo.id"
      :todo="todo"
      @click-title="clickTitle"
      @click-delete="clickDelete"
    ></todo-item>
  </ul>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useRouter } from 'vue-router'
import TodoItem from './TodoItem.vue'
import { key } from '@/store/todo'

export default defineComponent({
  components: {
    TodoItem
  },
  async setup() {
    const todoStore = inject(key)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }
    const router = useRouter()
    const clickDelete = (id: number) => {
      todoStore.deleteTodo(id)
    }
    const clickTitle = (id: number) => {
      router.push(`/edit/${id}`)
    }

    await todoStore.fetchTodos()

    return {
      todoStore,
      clickDelete,
      clickTitle
    }
  },
})

</script>

