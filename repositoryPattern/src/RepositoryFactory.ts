import UserRepository from './UserRepository'

interface repositoryObject {
    [name: string]: any
}

const repositories: repositoryObject = {
    users: UserRepository
}

export const RepositoryFactory = {
    get: (name: string) => repositories[name]
}
