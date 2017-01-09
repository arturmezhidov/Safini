import { RouterConfig, provideRouter } from '@angular/router';
import { About } from './about';
import { Blog } from './blog';
import { Home } from './home';
import { Shop } from './shop';

import { Auth } from './containers';
import { AuthService } from './services';

export const AppRoutes: RouterConfig = [
    {
        path: '',
        component: Home
        //canActivate: [AuthService],
        //children: [
        //    {
        //        path: '',
        //        component: Notes
        //    },
        //    {
        //        path: 'about',
        //        component: About
        //    }
        //]
    },
    {
        path: 'blog',
        component: Blog
    },
    {
        path: 'shop',
        component: Shop
    },
    {
        path: 'about',
        component: About
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

export const APP_ROUTER_PROVIDER = provideRouter(AppRoutes);