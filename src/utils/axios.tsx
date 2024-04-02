import axios from 'axios'

const Instance = axios?.create({
  baseURL: process.env.NEXT_PUBLIC_APP_BASE_URL,
  timeout: 18000,
})

Instance.interceptors.request.use(async req => {
  var token:any = ""
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('LBSToken')
}
  // const token = localStorage.getItem('LBSToken')
  if (!token) return req
  req.headers.Authorization = `Bearer ${token}`
  return req
})

export default Instance