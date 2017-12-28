import axios from 'axios'
// import store from '../vuex'
import { getToken , removeToken } from '@/utils/auth'
import { Toast } from 'mint-ui';
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import Qs from 'qs'

const mook = true

// 创建axios实例
const service = axios.create({
	baseURL: mook ? '' : process.env.BASE_API, // api的base_url
	timeout: 15000, // 请求超时时间
	transformRequest: [data => {
		data = Qs.stringify(data)
		return data
	}],
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// request拦截器	
service.interceptors.request.use(config => {
	if (getToken()) {
		config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
	}
	NProgress.start()
	return config
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
	response => {
		/**
		* status为非0是抛错 可结合自己业务进行修改
		*/
		NProgress.done()
		const res = response.data
		if (res.code === '4') {
			removeToken()
			location.reload()
		} else if (res.status !== 0) {
			Toast(res.error);
			// return Promise.reject('error')
			return response.data
		} else {
			return response.data
		}
	},
	error => {
		NProgress.done()
		console.log('err' + error)// for debug
		Toast(error.message);
		return Promise.reject(error)
	}
)

export default service
