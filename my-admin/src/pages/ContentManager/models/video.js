import { queryVideos, queryInfo } from '@/services/video';
import { addkey } from '@/utils/addKey';

export default {
  namespace: 'video',

  state: {
    list:[],
    info: {},
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryVideos,payload);
      yield put({
        type: 'save',
        payload: response.data,
      });
    },

    *fetchInfo({ payload }, { call, put }){
      const response = yield call(queryInfo,payload);
      yield put({
        type: 'saveInfo',
        payload: response.data,
      });
    }

  },

  reducers: {
    save(state, action) {
      const { videos, pagination } = action.payload;
      const list = addkey(videos);
      // videos.filter(function(item){   // 这里感觉应该可以不用创建list的，但是return的都是没有key的
      //   list.push({                   
      //     ...item,
      //     key:item.id,
      //   })
      //   return item;
      // });
      return {
        ...state,
        list: { list, pagination },
      };
    },

    saveInfo(state, action){
      const { info } = action.payload;
      return{
        ...state,
        info: info,
      }
    }
  },

  subscriptions:{
    setup({dispatch,history}){        //监听视频详细信息的路由
      history.listen((location) => {
        if (location.pathname === '/contentmanager/video/video-list/info') {
          dispatch({
            type: 'fetchInfo',
            payload: location.query,
          })
        }
      })
    },
  },

};
