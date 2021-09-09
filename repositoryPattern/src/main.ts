import { RepositoryFactory } from "./RepositoryFactory"
const userRepository = RepositoryFactory.get('users')

const userResponse = async () => {
  const showResponse = await userRepository.show(2)
  console.log('show', showResponse)

  const indexResponse = await userRepository.index()
  console.log('index', indexResponse)
}

userResponse()
