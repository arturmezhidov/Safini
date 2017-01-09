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
var app_bar_1 = require('../ui/app-bar');
var notes_1 = require('./notes');
var router_1 = require('@angular/router');
var Main = (function () {
    function Main() {
    }
    Main = __decorate([
        core_1.Component({
            selector: 'main-container',
            directives: [
                app_bar_1.AppBar,
                notes_1.Notes
            ].concat(router_1.ROUTER_DIRECTIVES),
            template: "\n    <div class=\"main-container\">\n      <app-bar></app-bar>\n      <main class=\"main\">\n        <router-outlet></router-outlet>\n      </main>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Main);
    return Main;
}());
exports.Main = Main;
//# sourceMappingURL=main.js.map