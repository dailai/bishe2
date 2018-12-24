export default [
  // user
  {

    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { 
        path: '/user', 
        redirect: '/user/login' 
      },
      { 
        path: '/user/login', 
        component: './User/Login' 
      },
      { 
        path: '/user/register', 
        component: './User/Register' 
      },
      { 
        path: '/user/register-result', 
        component: './User/RegisterResult' 
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user','guest'],
    routes: [

      { 
        path: '/', 
        redirect: '/dashboard/welcome' 
      },

      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes:[
          {
            path: '/dashboard/welcome',
            name: 'welcome',
            component: './Dashboard/Welcome',
          },

        ]
      },
      {
        path: '/usermanager',
        name: 'usermanager',
        icon: 'table',
        authority: ['admin', 'user'],
        routes:[
          {
            path: '/usermanager/user',
            name: 'userlist',
            component: './UserManager/User',
            hideChildrenInMenu: true,           //隐藏下面的menu
            routes:[
              {
                path: '/usermanager/user',
                redirect: '/usermanager/user/user-list',
              },
              {
                path: '/usermanager/user/user-list',
                component: './UserManager/User/UserList'
              },
              {
                path: '/usermanager/user/user-list/info',
                name: 'userinfo',
                component: './UserManager/User/UserInfo',
              },
            ]
          },
          
        ]
      },
      {
        path: '/contentmanager',
        name: 'contentmanager',
        icon: 'table',
        authority: ['admin', 'user'],
        routes:[
          {
            path: '/contentmanager/video',
            name: 'videolist',
            component: './ContentManager/Video',
            hideChildrenInMenu: true,
            routes:[
              {
                path: '/contentmanager/video',
                redirect: '/contentmanager/video/video-list',
              },
              {
                path: '/contentmanager/video/video-list',
                component: './ContentManager/Video/VideoList'
              },
              {
                path: '/contentmanager/video/video-list/info',
                name: 'videoinfo',
                component: './ContentManager/Video/Info',
              },
            ]
          },
          {
            path: '/contentmanager/bigimg',
            name: 'bigimg',
            component: './ContentManager/BigImg',
          },
        ]
      },
      {
        path: '/sysusermanager',
        name: 'sysusermanager',
        icon: 'check-circle-o',
        authority: ['admin'],
        routes:[
          {
            path: '/sysusermanager/user-list',
            name: 'userlist',
            component: './SysUserManager/UserList',
          },
          {
            path: '/sysusermanager/role-list',
            name: 'rolelist',
            component: './SysUserManager/RoleList',
          },
        ]
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        hideInMenu: true,
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        // authority: ['admin','user'],
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
