import {
  getMovieById
} from 'services/movies';
import router from 'umi/router';
export default {
  namespace: 'moviesDetail',
  state: {
    movieDetails: {},
  },
  effects: {
    * getMovieById({
        payload,
        callback
      }, {
        call,
        put
      }) {
      const response = yield call(getMovieById, payload);
      if(!response){
        return;
      }
      yield put({
        type: 'setData',
        payload: response
      });
      if (response && callback) {
        callback(response);
      }
    },
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        movieDetails: payload,
      }
    },
    clearData(state) {
      return {
        ...state,
        movieDetails: {},
      }
    }
  },
  subscriptions: {
    // 这里主要还是设置一个 react 监听器，传参就是 dispatch 和 history 两个参数
    // 这里的方法名可以随便命名，当监听有变化的时候就会依次执行这的变化,这里的dispatch和history和之前说的是一样的
    onClick({ dispatch, history }) {
      document.addEventListener('click', () => {
        console.log(history);
        // dispatch({
        //   type: 'clearData'
        // })
      })
    },
    setupHistory({dispatch,history}){
      // 监听路由变化
      history.listen((location) => {
        if (location.pathname === "/movie-detail") {
          console.log(location)   //这里可以获取当前变化的history路径以及参数，hash所有值，这样就可以在路由地址变化后做处理
          // router.push('/movies')
        }
      })
    }
  },
};
