import React, {useRef} from "react";

type AddTodoProps = {
  todoAdded: (todoText: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    if (textInputRef.current!.value === '') {
      return
    }
    const enteredText = textInputRef.current!.value;
    props.todoAdded(enteredText)
    textInputRef.current!.value = ''
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">Add Todo.</button>
    </form>
  )
}
