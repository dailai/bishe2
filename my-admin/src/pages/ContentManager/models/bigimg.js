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
        const { data } = response;
        yield put({
            type: 'save',
            payload: data,
        });
    },
    
    *fetchSubmit( { payload }, { call, put }){
        const response = yield call(querySubmit, payload);
        const { data } = response;
        yield put({
            type: 'save',
            payload: data,
        });
    },

    *fetchRemove( { payload }, { call, put }){
        const response = yield call(queryRemove, payload);
        const { data } = response;
        yield put({
            type: 'save',
            payload: data,
        });
    },

    *changeStatus( { payload }, { call, put }){
        const response = yield call(queryChangeStatus, payload.changeData);
        const { data } = response;
        yield put({
            type: 'save',
            payload: data,
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
