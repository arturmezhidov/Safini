import { RouterConfig, provideRouter } from '@angular/router';
import { HomeContainer, ShopContainer, BlogContainer, AboutUsContainer } from './user-interface/containers';

//import { Auth } from './containers';
//import { AuthService } from './services';

export const AppRoutes: RouterConfig = [
    {
        path: '',
        component: HomeContainer
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
        component: BlogContainer
    },
    {
        path: 'shop',
        component: ShopContainer
    },
    {
        path: 'about',
        component: AboutUsContainer
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