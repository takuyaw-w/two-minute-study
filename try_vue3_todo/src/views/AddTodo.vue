<template>
  <h2>TODOを作成する</h2>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="data.title" />
    </div>
    <div>
      <label for="description">Description</label>
      <textarea id="description" v-model="data.description"></textarea>
    </div>
    <div>
      <label for="status">STATUS</label>
      <select id="status" v-model="data.status">
        <option value="waiting">waiting</option>
        <option value="working">working</option>
        <option value="completed">completed</option>
        <option value="pending">pending</option>
      </select>
    </div>
    <button type="submit">CREATE</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import { useRouter, Router} from 'vue-router'
import { Params } from '@/store/todo/types'
import { key } from '@/store/todo'

export default defineComponent({
  setup() {
    const todoStore = inject(key)
    if (!todoStore) {
      throw new Error('todoStore is not provided')
    }

    const router: Router = useRouter()
    const data = reactive<Params>({
      title: '',
      description: '',
      status: 'waiting'
    })

    const onSubmit = () => {
      const { title, description, status } = data
      todoStore.addTodo({
        title,
        description,
        status
      })
      router.push('/')
    }

    return {
      data,
      onSubmit
    }
  },
})
</script>

