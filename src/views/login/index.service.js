import request from '../../utils/request'

export function getData() {
  return request({
    url: '/getData',
    method: 'get'
  })
}