import React from 'react'

interface TodoProps {
  items: {
    id: number,
    text: string
  }[]
}

export const Todo: React.FC<TodoProps> = (props) => {
  return (
    <ul>
      {props.items.map(list => (
        <li key={list.id}>{list.id}. {list.text}</li>
      ))}
    </ul>
  )
}

