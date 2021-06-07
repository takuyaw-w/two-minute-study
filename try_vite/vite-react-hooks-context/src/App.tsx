import React, { createContext, useState } from 'react'
import './App.css'
import { ContextA } from './components/ContextSample/ContextA'

export const UserContext = createContext()
export const HobbyContext = createContext()

function App() {
  const [user, setUser] = useState({
    name: 'seira',
    age: '15'
  })

  const [hobby, setHobby] = useState('drive')

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <HobbyContext.Provider value={hobby}>
          <ContextA />
        </HobbyContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
