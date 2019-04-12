import axios from 'axios'
import $router from '@/router'

const service = axios.create({
	timeout: 20000,
	withCredentials: true
})

service.interceptors.request.use(config => config, error => {
	Promise.reject(error)
})

service.interceptors.response.use(
	response => {
		const res = response.data

		if (response.status === 200 && res.status === 0) {
			return res.data
		} else {
			if (res.msg) {
				alert(res.msg)
			}
		}
		return Promise.reject(res)
	},
	error => {
		const response = error.response
		if (response === undefined) {
			return Promise.reject(error)
		}
    if (response.status) {
      alert(`请求失败，错误码：${response.status}`)
    }
		return Promise.reject(error)
	}
)

export default service
