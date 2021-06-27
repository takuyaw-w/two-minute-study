import { Todo, Params } from '@/store/todo/types'
import { TodoClientInterface } from './types'

const mockTodo: Todo[] = [
  {
    id: 1,
    title: 'todo1',
    description: 'one',
    status: 'waiting',
    createdAt: new Date('2020-12-01'),
    updatedAt: new Date('2020-12-01')
  },
  {
    id: 2,
    title: 'todo2',
    description: 'one',
    status: 'waiting',
    createdAt: new Date('2020-12-02'),
    updatedAt: new Date('2020-12-02')
  },
  {
    id: 3,
    title: 'todo3',
    description: 'one',
    status: 'working',
    createdAt: new Date('2020-12-03'),
    updatedAt: new Date('2020-12-04')
  },
]

export class MockTodoClient implements TodoClientInterface {
  async getAll() {
    return Promise.resolve(mockTodo)
  }

  get(id: number) {
    const todo = mockTodo.find((todo) => todo.id === id)
    if (todo === undefined) {
      return Promise.reject(new Error(`id: ${id} is not found`))
    }
    return Promise.resolve(todo)
  }

  create(params: Params) {
    const todo = this.initializeTodo(params)
    return Promise.resolve(todo)
  }

  update(id: number, todo: Todo) {
    todo.updatedAt = new Date()
    return Promise.resolve(todo)
  }

  delete(id: number) {
    return Promise.resolve()
  }

  initializeTodo(todo: Params) {
    const date = new Date()
    return {
      id: date.getTime(),
      title: todo.title,
      description: todo.description,
      status: todo.status,
      createdAt: date,
      updatedAt: date
    } as Todo
  }
}
