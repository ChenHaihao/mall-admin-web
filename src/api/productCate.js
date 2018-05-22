import request from '@/utils/request'
export function fetchList(parentId,params) {
  return request({
    url:'/productCategory/list/'+parentId,
    method:'get',
    params:params
  })
}
export function deleteProductCate(id) {
  return request({
    url:'/productCategory/delete/'+id,
    method:'get'
  })
}

export function createProductCate(data) {
  return request({
    url:'/productCategory/create',
    method:'post',
    data:data
  })
}

export function updateProductCate(id,data) {
  return request({
    url:'/productCategory/update/'+id,
    method:'post',
    data:data
  })
}

export function getProductCate(id) {
  return request({
    url:'/productCategory/'+id,
    method:'get',
  })
}