import * as type from '../action/type.js';

export const loginReducer = function(state,action={}){
    if(!state){                     
        let user = JSON.parse(localStorage.getItem('user')); 
        if( user!=null && user.username){
            console.log(user);
            return{
                logined:true,
                user:user,
            }
        }
        return{
            logined: false,   //开始是未登陆的
            user:{},
        }
    }
    switch(action.type){
        case type.LOGIN:
            return {
                ...state,
                logined: true,
                user:  action.user,
            }
        case type.SIGNOUT:
            return{
                ...state,
                logined:false,
                user:{},
            }
        default:
            return state;
    }
}





