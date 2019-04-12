import Mock from 'mockjs'
import api from './api.ts'
console.log('load mock.js successful...')

// Mock.mock(/\/esm\/rest\/group\/distributor\/login/, 'post', userAPI.login) // 登录接口
// Mock.mock(/\/esm\/rest\/group\/distributor\/logout/, 'post', userAPI.logout) // 登出接口
// Mock.mock(/\/esm\/rest\/group\/distributor\/getRegisterCode/, 'get', userAPI.getVerifyCode)  // 注册获取验证码
// Mock.mock(/\/esm\/rest\/group\/distributor\/verifyRegisterCode/, 'post', userAPI.compareCode)    // 对比注册验证码
// Mock.mock(/\/esm\/rest\/group\/distributor\/getForgetCode/, 'get', userAPI.getForgetVerifyCode)  // 忘记密码获取验证码
// Mock.mock(/\/esm\/rest\/group\/distributor\/register/, 'post', userAPI.register) // 注册用户

// 钱包相关的请求
// Mock.mock(/\/esm\/rest\/account\/isOpenTheSwiftpass/, 'get', walletAPI.queryIsMerchantUser)  // 是否特约用户

// 管理页面的请求
Mock.mock(/\/api\/movie\/list/, 'get', api.getMovieList) // 获取微信授权信息
// Mock.mock(/\/esm\/rest\/goods\/getGoodsList/, 'get', manageAPI.getElectInfo)    // 获取商户信息

// Mock.mock(/\/esm\/rest\/order\/getOrderRecord/, 'get', manageAPI.getOrderRecord)    // 获取商户信息
