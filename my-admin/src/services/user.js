import request from '@/utils/request';

export async function query() {
  return request('/server/user/list');
}

export async function cgStatus({ id, status}){
  return request('/server/user/cgStatus?status='
                    +status+'&id='+id);
}

export async function removeUser({ id }){
  return request('/server/user/remove?id='+id);
}

export async function userInfo({ id }){
  return request('/server/user/info?id='+id);
}