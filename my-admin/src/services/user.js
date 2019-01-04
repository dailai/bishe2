import request from '@/utils/request';

export async function query() {
  return request('/user/list');
}

export async function cgStatus({ id, status}){
  return request('/user/cgStatus?status='
                    +status+'&id='+id);
}

export async function removeUser({ id }){
  return request('/user/remove?id='+id);
}

export async function userInfo({ id }){
  return request('/user/info?id='+id);
}