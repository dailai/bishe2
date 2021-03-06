import { query, queryCurrent, querySave, qieryRemove } from '@/services/adminUser';
import { addkey } from '@/utils/addKey';
import { setAuthority } from '@/utils/authority';

export default {
  namespace: 'adminUser',

  state: {
    list: [],
    currentUser: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(query);       
      yield put({
        type: 'save',
        payload: response.data.users,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentUser',
        payload: response.data,
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
      const { currentUser, currentRole } = action.payload;
      setAuthority(currentRole);
      return {
        ...state,
        currentUser: currentUser || {},
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
