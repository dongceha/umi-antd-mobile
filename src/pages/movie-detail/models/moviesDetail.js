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
  }
};
