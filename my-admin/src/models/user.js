import { query, cgStatus, removeUser, userInfo } from '@/services/user';

export default {
  namespace: 'user',

  state: {
    list: [],
    info:{},
  },

  effects: {
    *fetch(_, { call, put }) {
      
      const response = yield call(query);
      yield put({
        type: 'save',
        payload: response.data.users,
      });
    },
    *changeStatus({payload}, { call, put}){
      const response = yield call(cgStatus,payload);
      yield put({
        type: 'change',
        payload: payload
      })
    },
    *remove({payload},{ call, put}){
      const response = yield call(removeUser,payload);
      yield put({
        type: 'removeOne',
        payload: payload
      })
    },
    *info({ payload },{ call, put}){
      
      const response = yield call(userInfo,payload);
      yield put({
        type: 'saveInfo',
        payload: response.data.user,
      })
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveInfo(state,action){
      return {
        ...state,
        info: action.payload
      }
    },
    removeOne(state,action){
      const id = action.payload.id;
      const newList = state.list.filter(item => item.id !== id)
      return {
        ...state,
        list: newList
      }
    },
    change(state,action){
      const id = action.payload.id;
      let newList = state.list.filter(function(item){
        if(item.id === id){
          item.status = item.status === 1?0:1
        }
        return item;
      })
      return {
        ...state,
        list: newList
      }
    },
  },

  subscriptions:{
    setup({dispatch,history}){        //监听用户详细信息的路由
      history.listen((location) => {
        if (location.pathname === '/usermanager/user/user-list/info') {
          dispatch({
            type: 'info',
            payload: location.query,
          })
        }
      })
    },
  }
};