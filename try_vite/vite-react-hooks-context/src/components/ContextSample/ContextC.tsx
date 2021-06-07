import React, {useContext} from 'react'
import { UserContext, HobbyContext } from '../../App'

export const ContextC = () => {
  const user = useContext(UserContext)
  const hobby = useContext(HobbyContext)
  return (
    <p>{user.name}{user.age}歳: {hobby}</p>
  )
}
