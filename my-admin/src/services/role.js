import request from '@/utils/request';

export async function query() {
    return request('/server/role/list');
}

export async function queryAdd(params){
    let formData = new FormData()
    if( params.id ){
        formData.append('id',params.id);
    }
    formData.append('name',params.name);
    return request('/server/role/add',{
        method: 'POST',
        body: formData
    })
}

export async function queryRemove(params) {
    const { id } = params
    return request('/server/role/remove?id='+id);
}
