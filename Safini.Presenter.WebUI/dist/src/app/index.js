"use strict";
//import * as services from './services';
var store_1 = require('./store');
var app_1 = require('./app');
exports.App = app_1.App;
var routes_1 = require('./routes');
exports.APP_ROUTER_PROVIDER = routes_1.APP_ROUTER_PROVIDER;
var mapValuesToArray = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
exports.providers = [
    store_1.Store
];
//# sourceMappingURL=index.js.map