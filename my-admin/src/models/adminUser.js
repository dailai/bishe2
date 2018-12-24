import { query, queryCurrent, querySave, qieryRemove } from '@/services/adminUser';
import { addkey } from '@/utils/addKey';


export default {
  namespace: 'adminUser',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(query);  
      console.log(response)       
      yield put({
        type: 'save',
        payload: response.data.users,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response.data.currentUser,
      });
    },
    *fetchSave({ payload }, { call, put }){
      const response = yield call(querySave, payload);
      yield put({
        type: 'save',
        payload: response.data.users,
      });
    },

    *fetchRemove({ payload }, { call, put }){
      const response = yield call(qieryRemove,payload);
      yield put({
        type: 'save',
        payload: response.data.users,
      });
    }
  },

  reducers: {
    save(state, action) {
      const list = addkey(action.payload);
      return {
        ...state,
        list: list,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
