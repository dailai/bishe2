

export default class FetchAjax{

    joinFormData(datas){
        let result='';
        for (let key in datas){
            result +=  '&' + key + '=' +datas[key] ;
        }
        if(result){
            result = result.slice(1);
        }
        return result;
    }
    
    post(url,datas){
        let result=fetch(url,{
            // credentials:"include",//发送带有诸如cookie之类的凭证的请求
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:this.joinFormData(datas),
            }).then(function(response){ //解析返回数据
                return response.json();
            }).then(function(jsonData){ 
                console.log(jsonData);
                return jsonData;
            }).catch(function(){
                console.log("发生错误");
            });
        return result;
    }
    get(url,params){
        if(params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        //fetch请求
        let res = fetch(url,{
            method: 'GET',
            async:false,
            }).then(function(response){ //解析返回数据
                return response.json();
            }).then(function(jsonData){ 
                console.log(jsonData);
                return jsonData;
            }).catch(function(){
                console.log("发生错误");
            });
        return res;
    }
}