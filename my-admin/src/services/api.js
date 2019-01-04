import { stringify } from 'qs';
import request from '@/utils/request';



export async function fakeAccountLogin(params) {        //登陆
  const formData = new FormData()
  formData.append("username",params.userName);
  formData.append("password",params.password);
  return request('/login', {
    method: 'POST',
    body: formData,
  });
}

export async function queryRegister(params) {
  return request('/admin/jp', {
    method: 'POST',
    body: params,
  });
}

