import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/movie-detail",
        "exact": true,
        "component": require('../movie-detail/index.js').default
      },
      {
        "path": "/class",
        "exact": true,
        "component": require('../class/index.js').default
      },
      {
        "path": "/home/models/home",
        "exact": true,
        "component": require('../home/models/home.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/login",
        "exact": true,
        "component": require('../login/index.js').default
      },
      {
        "path": "/home",
        "exact": true,
        "component": require('../home/index.js').default
      },
      {
        "path": "/movie-detail/models/moviesDetail",
        "exact": true,
        "component": require('../movie-detail/models/moviesDetail.js').default
      },
      {
        "path": "/movies",
        "exact": true,
        "component": require('../movies/index.js').default
      },
      {
        "path": "/movies/models/movies",
        "exact": true,
        "component": require('../movies/models/movies.js').default
      },
      {
        "path": "/my",
        "exact": true,
        "component": require('../my/index.js').default
      },
      {
        "path": "/my/models/my",
        "exact": true,
        "component": require('../my/models/my.js').default
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
