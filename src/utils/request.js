import axios from 'axios'
// let config = ['http://120.0.0.0.1:8080']
let request = axios.create({
	// baseURL: config.baseUrl,
	timeout: 600000, // 请求超时时间
	headers: {
		//'Access-Control-Allow-Origin': '*',
		// 'Content-Type': 'application/json;charset=UTF-8',
		// Accept: 'application/json'
	},

})

// request请求拦截器
request.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject('request error:', error)
	}
)

// Axios response 拦截器
request.interceptors.response.use(
	response => {
		return response
	},
	error => {
		console.log(error,"err")
	}
)


export default request