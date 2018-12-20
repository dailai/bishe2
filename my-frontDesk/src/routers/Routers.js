

const Routers = [
    {
        layout: '/BasicLayout',
        routes:[
            {
                component:'/',
            },
            {
                component:'/img',
            },
            {
                component:'/videoview',
            },
            {
                component:'/vc',
            },
            {
                component:'/imgview',
            },
        ]
    },
    {
        layout: '/UserLayout',
        routes:[
            {
                component:'/login',
            },
            {
                component:'/register',
            },
            {
                component:'/upload',
            },
            {
                component:'/erroe',
            },
        ]
    }
]

export default Routers;
