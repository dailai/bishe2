import request from '@/utils/request';

export async function query() {
  return request('/server/adminUser/list');
}

export async function queryCurrent() {
  // return request('/server/adminUser/current');
  return request('/api/currentUser');
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
  
  return request('/server/adminUser/save?',{
    method: 'POST',
    body: formData
  });
}

export async function qieryRemove({ id }){

  return request('/server/adminUser/remove?id='+id);
}
