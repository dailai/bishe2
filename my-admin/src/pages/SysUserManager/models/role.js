import { query, queryAdd, queryRemove } from '@/services/role';

export default {
    namespace: 'role',

    state: {
        list: [],
    },

    effects:{
        *fetch(_, { call, put }){
            const response = yield call(query);         
            yield put({
                type: 'save',
                payload: response.data,
            });
        },

        *add({ payload }, { call, put }){
            const response = yield call(queryAdd,payload);
            yield put({
                type: 'save',
                payload: response.data,
            })
        },

        *remove({ payload }, { call, put }){
            console.log(JSON.stringify(payload))
            const response = yield call(queryRemove,payload);
            yield put({
                type: 'save',
                payload: response.data,
            })
        }
    },

    reducers:{
        save(state,action){
            const list = [];
            const { roles } = action.payload;
            roles.filter(function(item){  
                list.push({                   
                  ...item,
                  key:item.id,
                })
                return item;
              });

            return{
                ...state,
                list: list,
            }
        },
    },
};