
accessid= 'LTAI7Y137y05BxnR';
accesskey= 'NSCHNkwPkbr3BWG1nrosPk4NGyWHui';
host = 'https://luo20181213.oss-cn-shenzhen.aliyuncs.com/';

var policyText = {
    "expiration": "2020-01-01T12:00:00.000Z", //设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
    "conditions": [
    ["content-length-range", 0, 1048576000] // 设置上传文件的大小限制
    ]
};
