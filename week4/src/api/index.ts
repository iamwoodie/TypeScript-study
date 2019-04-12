import request from '@/utils/request.ts'

// 获取电影列表
export function getMovieList() {
	return request({
		url: '/api/movie/list',
		method: 'get'
	})
}
