webpackJsonp([0],{

/***/ 0:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_1 = __webpack_require__(/*! ./app/app */ 328);
	//import { AppComponent } from './app.component';
	//import { APP_ROUTER_PROVIDERS } from './app.routes';
	platform_browser_dynamic_1.bootstrap(app_1.App);
	var t = "dddddddddddddddddddddddddddddddddddddddddddddddddddddd";


/***/ },

/***/ 328:
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

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
	var core_1 = __webpack_require__(/*! @angular/core */ 5);
	//import { Default } from './containers';
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            //directives: [
	            //    Default
	            //],
	            //template: `
	            //    <div>
	            //        <default-container></default-container>
	            //    </div>
	            //`
	            template: "\n        <div>\n            <h3>Hello world!!!</h3>\n        </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ }

});
//# sourceMappingURL=main.map