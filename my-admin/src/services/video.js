import request from '@/utils/request';


export async function videos(params) {
    let urlParams = '';
    if(params){
        if(params.currentPage){
            urlParams += 'page='+params.currentPage+'&';
        }
        if(params.pageSize){
            urlParams += 'size='+params.pageSize+'&';
        }
        if(params.checkStatus){
            console.log(params.values)
            urlParams += 'checkStatus='+params.checkStatus+'&';
        }
        if(params.nickname){
            urlParams += 'nickname='+params.nickname+'&';
        }
        if(params.showStatus){
            urlParams += 'showStatus='+params.showStatus+'&';
        }
            
        
    }
    return request('/server/video/list?'+urlParams);
}

export async function queryInfo({ id }) {

    return request('/server/video/info?id='+id);
}
