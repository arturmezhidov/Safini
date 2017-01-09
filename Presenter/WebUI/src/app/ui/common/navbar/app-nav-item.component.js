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
var AppNavItem = (function () {
    function AppNavItem() {
        this.selected = new core_1.EventEmitter();
    }
    AppNavItem.prototype.onSelected = function () {
        this.selected.next(this);
    };
    AppNavItem.prototype.activate = function () {
        this.isActive = true;
    };
    AppNavItem.prototype.disactivate = function () {
        this.isActive = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppNavItem.prototype, "link", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AppNavItem.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], AppNavItem.prototype, "isActive", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppNavItem.prototype, "selected", void 0);
    AppNavItem = __decorate([
        core_1.Component({
            selector: 'app-nav-item',
            directives: router_1.ROUTER_DIRECTIVES.slice(),
            templateUrl: '/src/app/ui/common/app-nav/app-nav-item.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppNavItem);
    return AppNavItem;
}());
exports.AppNavItem = AppNavItem;
//# sourceMappingURL=app-nav-item.component.js.map