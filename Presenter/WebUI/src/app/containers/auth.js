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
var forms_1 = require('@angular/forms');
var auth_1 = require('../services/auth');
var router_1 = require('@angular/router');
var Auth = (function () {
    function Auth(auth, router) {
        this.auth = auth;
        this.router = router;
        this.user = {
            password: '',
            email: ''
        };
        this.mode = 'signin';
        this.linkText = 'Don\'t have an account?';
    }
    Auth.prototype.changeMode = function () {
        if (this.mode === 'signin') {
            this.mode = 'signup';
            this.linkText = 'Already have an account?';
        }
        else {
            this.mode = 'signin';
            this.linkText = 'Don\'t have an account?';
        }
    };
    Auth.prototype.authenticate = function () {
        var _this = this;
        this.auth.authenticate(this.mode, this.user)
            .subscribe(function () { return _this.router.navigate(['']); });
    };
    Auth = __decorate([
        core_1.Component({
            selector: 'auth-container',
            directives: forms_1.FORM_DIRECTIVES.slice(),
            styles: ["\n    .auth {\n      height: 100%;\n    }\n    input {\n      border-bottom: 1px solid lightgrey;\n    }\n    .ng-invalid.ng-dirty {\n      border-bottom: 1px solid red;\n    }\n    form {\n      width: 100%;\n      border-radius: 2px;\n      background-color: white;\n      padding: 20px;\n      height: 400px;\n    }\n    .inputs {\n      height: 100%;\n      position: relative;\n    }\n    .link {\n      color: lightblue;\n    }\n    .link:hover {\n      background-color: transparent;\n    }\n    .title {\n      font-size: 36px;\n      font-weight: 300;\n      text-transform: capitalize;\n    }\n    .error {\n      color: red;\n      position: absolute;\n      right: 20px;\n    }\n  "],
            template: "\n    <div class=\"auth row center-xs middle-xs\">\n      <form class=\"col-xs-6 shadow-2\" (ngSubmit)=\"authenticate()\" #authForm=\"ngForm\">\n        <div class=\"inputs row center-xs middle-xs\">\n          <h3 class=\"col-xs-8 title\">\n            {{ mode }}\n          </h3>\n          <input\n            class=\"col-xs-8\"\n            type=\"email\"\n            name=\"email\"\n            placeholder=\"email\"\n            required\n            [(ngModel)]=\"user.email\"\n            #email=\"ngModel\"\n          >\n          <div class=\"error\" [hidden]=\"email.valid || email.pristine\">email is invalid</div>\n          <input\n            class=\"col-xs-8\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"password\"\n            required\n            [(ngModel)]=\"user.password\"\n            #password=\"ngModel\"\n          >\n          <div class=\"error\" [hidden]=\"password.valid || password.pristine\">password is required</div>\n          <div class=\"actions col-xs-12\">\n            <div class=\"row center-xs\">\n              <button\n                [disabled]=\"!authForm.form.valid\"\n                type=\"submit\"\n                class=\"btn-light\"\n              >\n                {{ mode }}\n              </button>\n              <a (click)=\"changeMode()\" class=\"btn-light link\">\n                {{ linkText }}\n              </a>\n           </div>\n         </div>\n        </div>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [auth_1.AuthService, router_1.Router])
    ], Auth);
    return Auth;
}());
exports.Auth = Auth;
//# sourceMappingURL=auth.js.map