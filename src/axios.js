import acios from 'axios'

const instance = acios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default instance
