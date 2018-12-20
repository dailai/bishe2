import $ from 'jquery';

class JqueryAjax{
    post(url,formData){
        let result = $.ajax({
            url:url,
            type:'POST',
            dataType:'json',
            data:formData,
            // async : false,
            processData:false,  //tell jQuery not to process the data
            contentType: false,  //tell jQuery not to set contentType
            //这儿的三个参数其实就是XMLHttpRequest里面带的信息。
            success:function (res) {
                // console.log(JSON.stringify(data));
                // console.log(JSON.stringify(status));
                // console.log(JSON.stringify(e));
                return res.data;
            },
            error:function(data,status,e){
                console.log(data);
                console.log(status);
                console.log(e);
            }
        })
        // console.log(JSON.stringify(result));
        // console.log("上传完成后返回前："+JSON.stringify(result.responseJSON));
        return result;
    }


    get(url){
        let result = $.ajax({
            url:url,
            type:'get',
            dataType:'json',
            // data:formData,
            // async : false,
            processData:false,  //tell jQuery not to process the data
            contentType: false,  //tell jQuery not to set contentType
            success:function (res) {
                // console.log(res);
                return res.data;
            },
            error:function(err){
                console.log(err);
            }
        });
        // console.log("get返回前："+JSON.stringify(result));
        return result;
    }

}


export default JqueryAjax;
