import axios from 'axios'

const { REACT_APP_API } = process.env

const api = axios.create({
  baseURL: REACT_APP_API
})

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})
export default api
