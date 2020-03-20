import request from '../../utils/request'

export function login(body) {
  return request({
    url: '/login',
    method: 'post',
    data: body
  })
}