import {
  getItemByType
} from 'services/movies';
import router from 'umi/router';
export default {
  namespace: 'movies',
  state: {
    list: '',
    start: 0,
    hasMore: true,
    subjects: [],
  },
  effects: {
    * getItemByType({
        payload,
        callback
      }, {
        call,
        put
      }) {
      const response = yield call(getItemByType, payload);
      if(!response){
        return;
      }
      console.log(response)
      if (response.subjects.length === 0) {
        yield put({
          type: 'setHasMore',
          payload: false
        });
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
        list: payload,
        start: state.start + 20,
        subjects: [...state.subjects, ...payload.subjects]
      }
    },
    setHasMore(state, { payload }) {
      console.log(payload)
      return {
        ...state,
        hasMore: payload
      }
    }
  }
};
