import request from '@/utils/request';

export async function query() {
    return request('/bigimg/list');
}

export async function querySubmit({ name, title, width, height, url }) {
    let formData = new FormData();
    formData.append('name',name);
    formData.append('title',title);
    formData.append('width',width);
    formData.append('height',height);
    formData.append('url',url);
    return request('/bigimg/add',{
        method: 'POST',
        body: formData,
    });
}

export async function queryRemove({ id }) {
    return request('/bigimg/remove?id='+id);
}

export async function queryChangeStatus({ id, status }) {
    return request('/bigimg/status?id='+id+'&status='+status);
}

