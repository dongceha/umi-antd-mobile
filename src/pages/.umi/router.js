import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import('../../layouts/index.js'),
  
}),
    "routes": [
      {
        "path": "/class",
        "exact": true,
        "component": _dvaDynamic({
  
  component: () => import('../class/index.js'),
  
})
      },
      {
        "path": "/",
        "exact": true,
        "component": _dvaDynamic({
  
  component: () => import('../index.js'),
  
})
      },
      {
        "path": "/login",
        "exact": true,
        "component": _dvaDynamic({
  
  component: () => import('../login/index.js'),
  
})
      },
      {
        "path": "/movie-detail",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import('D:/github/umi-antd-mobile/src/pages/movie-detail/models/moviesDetail.js').then(m => { return { namespace: 'moviesDetail',...m.default}})
],
  component: () => import('../movie-detail/index.js'),
  
})
      },
      {
        "path": "/movie-detail/models/moviesDetail",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import('D:/github/umi-antd-mobile/src/pages/movie-detail/models/moviesDetail.js').then(m => { return { namespace: 'moviesDetail',...m.default}})
],
  component: () => import('../movie-detail/models/moviesDetail.js'),
  
})
      },
      {
        "path": "/movies",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import('D:/github/umi-antd-mobile/src/pages/movies/models/movies.js').then(m => { return { namespace: 'movies',...m.default}})
],
  component: () => import('../movies/index.js'),
  
})
      },
      {
        "path": "/movies/models/movies",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import('D:/github/umi-antd-mobile/src/pages/movies/models/movies.js').then(m => { return { namespace: 'movies',...m.default}})
],
  component: () => import('../movies/models/movies.js'),
  
})
      },
      {
        "path": "/my",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import('D:/github/umi-antd-mobile/src/pages/my/models/my.js').then(m => { return { namespace: 'my',...m.default}})
],
  component: () => import('../my/index.js'),
  
})
      },
      {
        "path": "/my/models/my",
        "exact": true,
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import('D:/github/umi-antd-mobile/src/pages/my/models/my.js').then(m => { return { namespace: 'my',...m.default}})
],
  component: () => import('../my/models/my.js'),
  
})
      },
      {
        "component": () => React.createElement(require('D:/github/umi-antd-mobile/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
      }
    ]
  },
  {
    "component": () => React.createElement(require('D:/github/umi-antd-mobile/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
