import Mock from 'mockjs'
import api from './api.ts'
console.log('load mock.js successful...')

Mock.mock(/\/api\/movie\/list/, 'get', api.getMovieList) // 模拟电影列表接口
