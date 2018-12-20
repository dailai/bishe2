import { 
    query, 
    queryUpload, 
    queryRemove,
    queryChangeStatus
    } from '@/services/bigimg';
import { addkey } from '@/utils/addKey';

export default {
  namespace: 'bigimg',

  state: {
    list:[],
  },

  effects: {
    *fetch(_,{ call, put }){
        const response = yield call(query);
        yield put({
            type: 'save',
            payload: response.data,
        });
    },
    
    *fetchUpload( { payload }, { call, put }){
        const response = yield call(queryUpload, payload);
        yield put({
            type: 'save',
            payload: response.data,
        });
    },

    *fetchRemove( { payload }, { call, put }){
        const response = yield call(queryRemove, payload);
        yield put({
            type: 'save',
            payload: response,
        });
    },

    *changeStatus( { payload }, { call, put }){
        const response = yield call(queryChangeStatus, payload.changeData);
        yield put({
            type: 'save',
            payload: payload,
        });
    }
  },

  reducers: {
    save(state, action){
        let { list } = action.payload;
        list = addkey(list)
        return {
            ...state,
            list: list,
        };
    }
  },
};
