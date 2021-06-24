<template>
  <h2>TODOを編集する</h2>
  <div v-if="error">
    ID：{{ $route.params.id }}のTODOが見つかりませんでした。
  </div>
  <form v-else @submit.prevent="onSubmit">
    <div>
      <label for="title">タイトル</label>
      <input type="text" id="title" v-model="data.title" />
    </div>
    <div>
      <label for="description">説明</label>
      <textarea id="description" v-model="data.description" />
    </div>
    <div>
      <label for="status">ステータス</label>
      <select id="status" v-model="data.status">
        <option value="waiting">waiting</option>
        <option value="working">working</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </div>
    <button type="submit">更新する</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { Params } from '@/store/todo/types'
import { key } from '@/store/todo'

export default defineComponent({
  setup() {
    const todoStore = inject(key)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    const router = useRouter()
    const route = useRoute()

    const id = Number(route.params.id)
    try {
      const todo = todoStore.getTodo(id)

      const data = reactive<Params>({
        title: todo.title,
        description: todo.description,
        status: todo.status
      })

      const onSubmit = () => {
        const { title, description, status } = data
        todoStore.updateTodo(id, {
          ...todo,
          title,
          description,
          status,
        })
        router.push('/')
      }

      return {
        error: false,
        data,
        onSubmit
      }
    } catch (e) {
      console.error(e)
      return {
        error: true,
      }
    }
  },
})
</script>