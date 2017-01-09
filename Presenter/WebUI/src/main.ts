import { bootstrap } from '@angular/platform-browser-dynamic';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';
//import { HTTP_PROVIDERS } from '@angular/http';
import { App, providers, APP_ROUTER_PROVIDER } from './app';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

bootstrap(App, [
    //...HTTP_PROVIDERS,
    //disableDeprecatedForms(),
    //provideForms(),
    APP_ROUTER_PROVIDER,
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    ...providers
]);