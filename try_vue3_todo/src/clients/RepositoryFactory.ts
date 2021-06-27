import { TodoClient } from "@/clients/TodoClient"
import {MockTodoClient} from "./TodoClient/mock"
import { TodoClientInterface } from './TodoClient/types'

export const TODOS = 'todos'

export interface Repositories {
  [TODOS]: TodoClientInterface
}

export default {
  [TODOS]:
    process.env.NODE_ENV === 'mock' ? new MockTodoClient() : new TodoClient()
} as Repositories
