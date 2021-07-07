import request from './request.js'

//
export function test(data) {
	return request({
		url: '/getTangPoetry?page=1&count=20',
		method: 'get',
		// data: data
	})
}
