import axios from 'axios'

const Instance = axios?.create({
  baseURL: "https://dev.littlebigsocial.com",
  timeout: 18000,
})

console.log(process.env.NEXT_PUBLIC_APP_BASE_URL,"process.env.NEXT_PUBLIC_APP_BASE_URL")
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