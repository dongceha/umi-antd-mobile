import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  ...((require('D:/github/umi-antd-mobile/src/dva.js').config || (() => ({})))()),
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'moviesDetail', ...(require('D:/github/umi-antd-mobile/src/pages/movie-detail/models/moviesDetail.js').default) });
app.model({ namespace: 'home', ...(require('D:/github/umi-antd-mobile/src/pages/home/models/home.js').default) });
app.model({ namespace: 'movies', ...(require('D:/github/umi-antd-mobile/src/pages/movies/models/movies.js').default) });
app.model({ namespace: 'my', ...(require('D:/github/umi-antd-mobile/src/pages/my/models/my.js').default) });
