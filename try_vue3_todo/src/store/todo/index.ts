import { InjectionKey, reactive, readonly } from 'vue'
import { Params, Todo, TodoState, TodoStore } from '@/store/todo/types'
import Repository, { TODOS } from '@/clients/RepositoryFactory'
const TodoRepository = Repository[TODOS]

const state = reactive<TodoState>({
  todos: []
})

const fetchTodos = async () => {
  state.todos = await TodoRepository.getAll()
}

const fetchTodo = async (id: number) => {
  const todo = await TodoRepository.get(id)
  state.todos.push(todo)
}

const getTodo = (id: number): Todo => {
  const todo = state.todos.find((todo) => todo.id === id)
  if (!todo) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  return todo
}

const addTodo = async (todo: Params): Promise<void> => {
  const result = await TodoRepository.create(todo)
  state.todos.push(result)
}

const updateTodo = async (id: number, todo: Todo): Promise<void> => {
  const result = await TodoRepository.update(id, todo)
  const index = state.todos.findIndex((todo) => todo.id === id)
  if (index === -1) {
    throw new Error(`cannot find todo by id:${id}`)
  }
  state.todos[index] = result
}

const deleteTodo = (id: number): void => {
  TodoRepository.delete(id)
  state.todos = state.todos.filter((todo) => todo.id !== id)
}

const todoStore: TodoStore = {
  state: readonly(state),
  fetchTodos,
  fetchTodo,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
}

export default todoStore

export const key: InjectionKey<TodoStore> = Symbol('todo')
