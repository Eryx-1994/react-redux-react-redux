import request from './request.js'

//
export function test(data) {
	return request({
		url: '/api/test',
		method: 'get',
		// data: data
	})
}
