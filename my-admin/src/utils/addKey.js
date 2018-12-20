


// 有些antd的组件需要key作为组件能唯一识别的元素
// 需要给每个对象数据加上key
export const addkey = (arrayobject) =>{
    let newData = [];
    arrayobject.filter(function(item){
        newData.push({
            ...item,
            key: item.id,
        })
    })
    return newData;
}
