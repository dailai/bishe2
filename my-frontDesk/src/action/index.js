
import * as type from './type';

//登陆
export const loginSuccess = function(user){
    return {
        type: type.LOGIN,
        user: user
    }
}
//退出
export const signoutSuccess = () => {
    return{
        type: type.SIGNOUT,
    }
}