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
var services_1 = require('../services');
var AppBar = (function () {
    function AppBar(authService) {
        this.authService = authService;
    }
    AppBar.prototype.signout = function () {
        this.authService.signout();
    };
    AppBar = __decorate([
        core_1.Component({
            selector: 'app-bar',
            directives: router_1.ROUTER_DIRECTIVES.slice(),
            styles: ["\n    .app-bar {\n      height: 65px;\n      padding: 5px 30px;\n      background-color: #00BCD4;\n    }\n    .logo {\n      color: white;\n      font-size: 30px;\n      font-weight: 300;\n      cursor: pointer;\n    }\n    .link {\n      color: white;\n      font-size: 24px;\n      font-weight: 400;\n      cursor: pointer;\n    }\n  "],
            template: "\n    <header class=\"app-bar row middle-xs\">\n      <span [routerLink]=\"['']\" class=\"logo col-xs-10\">\n        Retain\n      </span>\n      <nav class=\"col-xs-2\">\n        <div class=\"row middle-xs between-xs\">\n          <span [routerLink]=\"['', 'about']\" class=\"link\">About</span>\n          <span (click)=\"signout()\" class=\"link\">signout</span>\n        </div>\n      </nav>\n    </header>\n  "
        }), 
        __metadata('design:paramtypes', [services_1.AuthService])
    ], AppBar);
    return AppBar;
}());
exports.AppBar = AppBar;
//# sourceMappingURL=app-bar.js.map