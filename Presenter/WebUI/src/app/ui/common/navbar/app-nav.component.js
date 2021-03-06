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
var router_1 = require('@angular/router');
var app_nav_item_component_1 = require('./app-nav-item.component');
var AppNav = (function () {
    function AppNav() {
    }
    AppNav.prototype.onSelected = function (item) {
        item.activate();
    };
    AppNav = __decorate([
        core_1.Component({
            selector: 'app-nav',
            directives: router_1.ROUTER_DIRECTIVES.concat([
                app_nav_item_component_1.AppNavItem
            ]),
            templateUrl: '/src/app/ui/common/app-nav/app-nav.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppNav);
    return AppNav;
}());
exports.AppNav = AppNav;
//# sourceMappingURL=app-nav.component.js.map