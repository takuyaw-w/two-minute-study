<template>
  <div class="card">
    <div>
      <span class="title" @click="clickTitle">{{ todo.title }}</span>
      <span class="status" :class="todo.status">{{ todo.status }}</span>
    </div>
    <span class="body">CreatedAt:{{ formatDate }}</span>
    <hr />
    <div class="action">
      <button @click="clickDelete">DELETE!</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Todo } from '@/store/todo/types'
import { useFormatDate } from '@/composables/use-formate-date'

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true
    }
  },
  emits: ['clickDelete', 'clickTitle'],
  setup(props, { emit }) {
    const clickDelete = () => {
      emit('clickDelete', props.todo.id)
    }

    const clickTitle = () => {
      emit('clickTitle', props.todo.id)
    }

    const formatDate = useFormatDate(props.todo.createdAt)

    return {
      clickDelete,
      clickTitle,
      formatDate
    }
  },
})
</script>

<style scoped>
.card {
  margin-bottom: 20px;
  border: 1px solid;
  box-shadow: 2px 2px 4px gray;
  width: 250px;
}

.title {
  font-weight: 400;
  font-size: 25px;
  padding: 5px;
}

.status {
  padding: 3px;
}

.waiting {
  background-color: #e53935;
}

.working {
  background-color: #80cbc4;
}

.completed {
  background-color: #42a5f5;
}

.pending {
  background-color: #ffee58;
}

.body {
  margin: 5px
}

.action {
  margin: 5px
}
</style>
