import { createStore } from 'redux';
import { loginReducer } from '../reducer';



const store = createStore(loginReducer);

// //将用户信息保存在localStorage里面
// const saveUser = (user) => {
//   try {
//     const serializedState = JSON.stringify(user);
//     localStorage.setItem('user', serializedState);
//   } catch (err) {
//     console.log("保存store失败"); 
//   }
// }

// //删除localStorage里面的user Key
// const deleteUser = () =>{
//   if(localStorage.getItem('user')){
//     localStorage.removeItem('user');
//   }
// }

// // 当用户刷新网页或强制关闭浏览器时保存用户信息
// window.onbeforeunload = (e) =>{
//     const user = store.getState().user;//获取用户登陆信息
//     if( !user.username ){   //现在只能这样判断，没有办法判断是不是{}
//       deleteUser();
//       return;
//     }
//     saveUser(user);
// }

export default store;

