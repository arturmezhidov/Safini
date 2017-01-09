"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var store_helper_1 = require('./store-helper');
var store_1 = require('../store');
var api_1 = require('./api');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var AuthService = (function () {
    function AuthService(storeHelper, api, router, store) {
        this.storeHelper = storeHelper;
        this.api = api;
        this.router = router;
        this.store = store;
        this.JWT_KEY = 'retain_token';
        var token = window.localStorage.getItem(this.JWT_KEY);
        if (token) {
            this.setJwt(token);
        }
    }
    AuthService.prototype.setJwt = function (jwt) {
        window.localStorage.setItem(this.JWT_KEY, jwt);
        this.api.setHeaders({ Authorization: "Bearer " + jwt });
    };
    AuthService.prototype.isAuthorized = function () {
        return Boolean(window.localStorage.getItem(this.JWT_KEY));
    };
    AuthService.prototype.canActivate = function () {
        var isAuth = this.isAuthorized();
        if (!isAuth) {
            this.router.navigate(['', 'auth']);
        }
        return isAuth;
    };
    AuthService.prototype.authenticate = function (path, creds) {
        var _this = this;
        return this.api.post("/" + path, creds)
            .do(function (res) { return _this.setJwt(res.token); })
            .do(function (res) { return _this.storeHelper.update('user', res.data); })
            .map(function (res) { return res.data; });
    };
    AuthService.prototype.signout = function () {
        window.localStorage.removeItem(this.JWT_KEY);
        this.store.purge();
        this.router.navigate(['', 'auth']);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [store_helper_1.StoreHelper, api_1.ApiService, router_1.Router, store_1.Store])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.js.map