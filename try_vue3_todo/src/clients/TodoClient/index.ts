import { Params, Todo } from '@/store/todo/types'
import { TodoClientInterface } from './types'

export class TodoClient implements TodoClientInterface {
  async getAll(): Promise<Todo[]> {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return Promise.resolve(
      Object.keys(localStorage)
        .filter((key) => !isNaN(Number(key)))
      .map((key) => {
        const todo = JSON.parse(localStorage.getItem(key) as string) as Todo
        todo.createdAt = new Date(todo.createdAt)
        todo.updatedAt = new Date(todo.updatedAt)
        return todo
      })
    )
  }

  get(id: number): Promise<Todo> {
    const item = localStorage.getItem(String(id))
    if (item === null) {
      return Promise.reject(new Error(`id: ${id} is not found`))
    }

    return Promise.resolve(JSON.parse(item) as Todo)
  }

  create(params: Params): Promise<Todo> {
    const todo = this.initializeTodo(params)
    localStorage.setItem(String(todo.id), JSON.stringify(todo))
    return Promise.resolve(todo)
  }

  update(id: number, todo: Todo): Promise<Todo> {
    localStorage.removeItem(String(id))
    todo.updatedAt = new Date()
    localStorage.setItem(String(id), JSON.stringify(todo))
    return Promise.resolve(todo)
  }

  delete(id: number): Promise<void> {
    localStorage.removeItem(String(id))
    return Promise.resolve()
  }

  initializeTodo(todo: Params): Todo {
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
