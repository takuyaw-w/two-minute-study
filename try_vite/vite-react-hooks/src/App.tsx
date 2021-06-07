import React, { useEffect, useState } from 'react'
import './App.css'

const App: React.FC = () => {
  const initialState: number = Math.floor(Math.random() * 10) + 1
  const [count, setCount] = useState<number>(initialState)
  const [open, setOpen] = useState<boolean>(true)
  const toggle = () => setOpen(!open)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <>
      <button onClick={toggle}>{open ? 'close' : 'open'}</button>
      <div className={open ? 'isOpen' : 'isClose'}>
        <p>{count}</p>
        <button onClick={() => setCount(prevState => prevState + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>0</button>
        <button onClick={() => setCount(initialState)}>initialize</button>
      </div>
    </>
  )
}

export default App
