"use strict";
var router_1 = require('@angular/router');
var news_1 = require('./pages/news');
var home_1 = require('./pages/home');
exports.routes = [
    { path: '', component: home_1.HomeComponent, useAsDefault: true },
    { path: 'news', component: news_1.NewsListComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map