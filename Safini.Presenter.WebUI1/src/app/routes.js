"use strict";
var router_1 = require('@angular/router');
var about_1 = require('./about');
var blog_1 = require('./blog');
var home_1 = require('./home');
var shop_1 = require('./shop');
exports.AppRoutes = [
    {
        path: '',
        component: home_1.Home
    },
    {
        path: 'blog',
        component: blog_1.Blog
    },
    {
        path: 'shop',
        component: shop_1.Shop
    },
    {
        path: 'about',
        component: about_1.About
    },
    //{
    //    path: 'auth',
    //    component: Auth
    //},
    {
        path: '**',
        redirectTo: ''
    }
];
exports.APP_ROUTER_PROVIDER = router_1.provideRouter(exports.AppRoutes);
//# sourceMappingURL=routes.js.map