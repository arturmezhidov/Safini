"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import { disableDeprecatedForms, provideForms } from '@angular/forms';
//import { HTTP_PROVIDERS } from '@angular/http';
var app_1 = require('./app');
var common_1 = require('@angular/common');
platform_browser_dynamic_1.bootstrap(app_1.App, [
    //...HTTP_PROVIDERS,
    //disableDeprecatedForms(),
    //provideForms(),
    app_1.APP_ROUTER_PROVIDER,
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
].concat(app_1.providers));
//# sourceMappingURL=main.js.map