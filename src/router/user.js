export default [

    //user tree: 40
    {
        path: '/login',
        name: 'Login',
        meta: {tree: 41},
        component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {tree: 42},
        component: () => import(/* webpackChunkName: "register" */ '@/views/user/Register.vue')
    },
    {
        path: '/user/setting',
        name: 'Setting',
        meta: {tree: 41},
        component: () => import(/* webpackChunkName: "setting" */ '@/views/user/Setting.vue')
    },
    {
        path: '/user/setting/address',
        name: 'Address',
        meta: {tree: 42},
        component: () => import(/* webpackChunkName: "address" */ '@/views/user/Address.vue')
    },
    {
        path: '/user/setting/address/add',
        name: 'AddressAdd',
        meta: {tree: 43},
        component: () => import(/* webpackChunkName: "addressAdd" */ '@/views/user/AddressAdd.vue')
    },
    {
        path: '/user/setting/address/edit',
        name: 'AddressEdit',
        meta: {tree: 43},
        component: () => import(/* webpackChunkName: "addressEdit" */ '@/views/user/AddressEdit.vue')
    },
    {
        path: '/user/qr',
        name: 'Qr',
        meta: {tree: 41},
        component: () => import(/* webpackChunkName: "qr" */ '@/views/user/QrCode.vue')
    },
    {
        path: '/user/coupon',
        name: 'Coupon',
        meta: {tree: 42},
        component: () => import(/* webpackChunkName: "coupon" */ '@/views/user/Coupon.vue')
    }

]