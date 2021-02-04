import axios from 'axios'
const { REACT_APP_API } = process.env
const api = axios.create({ baseURL: REACT_APP_API })
api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response)
  }
)
export default api
