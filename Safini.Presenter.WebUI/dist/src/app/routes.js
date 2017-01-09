"use strict";
var router_1 = require('@angular/router');
var containers_1 = require('./user-interface/containers');
//import { Auth } from './containers';
//import { AuthService } from './services';
exports.AppRoutes = [
    {
        path: '',
        component: containers_1.HomeContainer
    },
    {
        path: 'blog',
        component: containers_1.BlogContainer
    },
    {
        path: 'shop',
        component: containers_1.ShopContainer
    },
    {
        path: 'about',
        component: containers_1.AboutUsContainer
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