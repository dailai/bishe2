import request from '@/utils/request';

export async function query() {
  return request('/admin/list');
}

export async function queryCurrent() {
  return request('/admin/current');
}

export async function querySave({ id,
                                  name,
                                  username,
                                  password,
                                  email,
                                  phone, }){
  let formData = new FormData();

  id ? formData.append('id',id) : '';
  name ? formData.append('name',name) : '';
  username ? formData.append('username',username) : '';
  password ? formData.append('password',password) : '';
  email ? formData.append('email',email) : '';
  phone ? formData.append('phone',phone) : '';
  
  return request('/admin/save?',{
    method: 'POST',
    body: formData
  });
}

export async function qieryRemove({ id }){

  return request('/admin/remove?id='+id);
}
