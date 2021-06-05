import React, {useState} from 'react';
import { Todo } from './components/Todo'
import {AddTodo} from './components/AddTodo'
import {ToDo} from './todo.model'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAdd = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      {id: prevTodos.length + 1, text: text}
    ])
  }

  return (
    <div className="App">
      <AddTodo todoAdded={todoAdd}/>
      <Todo items={todos} />
    </div>
  );
}

export default App;
