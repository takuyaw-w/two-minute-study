import axios from 'axios'

const repository = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export default (resource: string) => {
    return {
        index() {
            return repository.get(resource)
        },
        show(id: number) {
            return repository.get(`${resource}/${id}`)
        },
        post(id: number, payload: any) {
            return repository.post(`${resource}/${id}`, payload)
        },
        delete(id:number) {
            return repository.delete(`${resource}/${id}`)
        }
    }
}
