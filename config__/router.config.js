export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {path: '/', redirect: 'home'},
      {
        path: 'home',
        component: './home/index',
        title: '第一夜'
      },
      {
        path: 'login',
        component: './login/index',
        title: '第二夜'
      },
      {
        path: 'class',
        component: './class/index',
        title: '第三夜'
      },
      {
        path: 'my',
        component: './my/index',
        title: '第四夜'
      },
    ]
    ,
  },
]
;
