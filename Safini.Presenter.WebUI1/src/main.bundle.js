webpackJsonp([0],{

/***/ 0:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	//import { disableDeprecatedForms, provideForms } from '@angular/forms';
	//import { HTTP_PROVIDERS } from '@angular/http';
	var app_1 = __webpack_require__(/*! ./app */ 328);
	var common_1 = __webpack_require__(/*! @angular/common */ 2);
	platform_browser_dynamic_1.bootstrap(app_1.App, [
	    //...HTTP_PROVIDERS,
	    //disableDeprecatedForms(),
	    //provideForms(),
	    app_1.APP_ROUTER_PROVIDER,
	    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
	].concat(app_1.providers));


/***/ },

/***/ 328:
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var services = __webpack_require__(/*! ./services */ 329);
	var store_1 = __webpack_require__(/*! ./store */ 609);
	var app_1 = __webpack_require__(/*! ./app */ 630);
	exports.App = app_1.App;
	var routes_1 = __webpack_require__(/*! ./routes */ 633);
	exports.APP_ROUTER_PROVIDER = routes_1.APP_ROUTER_PROVIDER;
	var mapValuesToArray = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
	exports.providers = [
	    store_1.Store
	].concat(mapValuesToArray(services));


/***/ },

/***/ 329:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var api_1 = __webpack_require__(/*! ./api */ 330);
	exports.ApiService = api_1.ApiService;
	var notes_1 = __webpack_require__(/*! ./notes */ 607);
	exports.NoteService = notes_1.NoteService;
	var store_helper_1 = __webpack_require__(/*! ./store-helper */ 608);
	exports.StoreHelper = store_helper_1.StoreHelper;
	var auth_1 = __webpack_require__(/*! ./auth */ 610);
	exports.AuthService = auth_1.AuthService;


/***/ },

/***/ 330:
/*!*********************************!*\
  !*** ./src/app/services/api.ts ***!
  \*********************************/
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
	var http_1 = __webpack_require__(/*! @angular/http */ 331);
	var Observable_1 = __webpack_require__(/*! rxjs/Observable */ 38);
	__webpack_require__(/*! rxjs/Rx */ 352);
	__webpack_require__(/*! rxjs/add/observable/throw */ 421);
	var ApiService = (function () {
	    function ApiService(http) {
	        this.http = http;
	        this.headers = new http_1.Headers({
	            'Content-Type': 'application/json',
	            Accept: 'application/json'
	        });
	        this.api_url = 'http://safini.local.me/api';
	    }
	    ApiService.prototype.getJson = function (response) {
	        return response.json();
	    };
	    ApiService.prototype.checkForError = function (response) {
	        if (response.status >= 200 && response.status < 300) {
	            return response;
	        }
	        else {
	            var error = new Error(response.statusText);
	            error['response'] = response;
	            console.error(error);
	            throw error;
	        }
	    };
	    ApiService.prototype.get = function (path) {
	        return this.http.get("" + this.api_url + path, { headers: this.headers })
	            .map(this.checkForError)
	            .catch(function (err) { return Observable_1.Observable.throw(err); })
	            .map(this.getJson);
	    };
	    ApiService.prototype.post = function (path, body) {
	        return this.http.post("" + this.api_url + path, JSON.stringify(body), { headers: this.headers })
	            .map(this.checkForError)
	            .catch(function (err) { return Observable_1.Observable.throw(err); })
	            .map(this.getJson);
	    };
	    ApiService.prototype.delete = function (path) {
	        return this.http.delete("" + this.api_url + path, { headers: this.headers })
	            .map(this.checkForError)
	            .catch(function (err) { return Observable_1.Observable.throw(err); })
	            .map(this.getJson);
	    };
	    ApiService.prototype.setHeaders = function (headers) {
	        var _this = this;
	        Object.keys(headers).forEach(function (header) { return _this.headers.set(header, headers[header]); });
	    };
	    ApiService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], ApiService);
	    return ApiService;
	    var _a;
	}());
	exports.ApiService = ApiService;


/***/ },

/***/ 607:
/*!***********************************!*\
  !*** ./src/app/services/notes.ts ***!
  \***********************************/
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
	var api_1 = __webpack_require__(/*! ./api */ 330);
	var store_helper_1 = __webpack_require__(/*! ./store-helper */ 608);
	__webpack_require__(/*! rxjs/Rx */ 352);
	var NoteService = (function () {
	    function NoteService(apiService, storeHelper) {
	        this.apiService = apiService;
	        this.storeHelper = storeHelper;
	        this.path = '/notes';
	    }
	    NoteService.prototype.createNote = function (note) {
	        var _this = this;
	        return this.apiService
	            .post(this.path, note)
	            .do(function (savedNote) { return _this.storeHelper.add('notes', savedNote); });
	    };
	    NoteService.prototype.getNotes = function () {
	        var _this = this;
	        return this.apiService
	            .get(this.path)
	            .do(function (res) { return _this.storeHelper.update('notes', res); });
	    };
	    NoteService.prototype.completeNote = function (note) {
	        var _this = this;
	        return this.apiService
	            .delete(this.path + "/" + note.id)
	            .do(function (res) { return _this.storeHelper.findAndDelete('notes', res.id); });
	    };
	    NoteService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof api_1.ApiService !== 'undefined' && api_1.ApiService) === 'function' && _a) || Object, (typeof (_b = typeof store_helper_1.StoreHelper !== 'undefined' && store_helper_1.StoreHelper) === 'function' && _b) || Object])
	    ], NoteService);
	    return NoteService;
	    var _a, _b;
	}());
	exports.NoteService = NoteService;


/***/ },

/***/ 608:
/*!******************************************!*\
  !*** ./src/app/services/store-helper.ts ***!
  \******************************************/
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
	var store_1 = __webpack_require__(/*! ../store */ 609);
	var StoreHelper = (function () {
	    function StoreHelper(store) {
	        this.store = store;
	    }
	    StoreHelper.prototype.update = function (prop, state) {
	        var currentState = this.store.getState();
	        this.store.setState(Object.assign({}, currentState, (_a = {}, _a[prop] = state, _a)));
	        var _a;
	    };
	    StoreHelper.prototype.add = function (prop, state) {
	        var currentState = this.store.getState();
	        var collection = currentState[prop];
	        this.store.setState(Object.assign({}, currentState, (_a = {}, _a[prop] = [state].concat(collection), _a)));
	        var _a;
	    };
	    StoreHelper.prototype.findAndUpdate = function (prop, state) {
	        var currentState = this.store.getState();
	        var collection = currentState[prop];
	        this.store.setState(Object.assign({}, currentState, (_a = {},
	            _a[prop] = collection.map(function (item) {
	                if (item.id !== state.id) {
	                    return item;
	                }
	                return Object.assign({}, item, state);
	            }),
	            _a
	        )));
	        var _a;
	    };
	    StoreHelper.prototype.findAndDelete = function (prop, id) {
	        var currentState = this.store.getState();
	        var collection = currentState[prop];
	        this.store.setState(Object.assign({}, currentState, (_a = {}, _a[prop] = collection.filter(function (item) { return item.id !== id; }), _a)));
	        var _a;
	    };
	    StoreHelper = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
	    ], StoreHelper);
	    return StoreHelper;
	    var _a;
	}());
	exports.StoreHelper = StoreHelper;


/***/ },

/***/ 609:
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
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
	var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ 527);
	var core_1 = __webpack_require__(/*! @angular/core */ 5);
	__webpack_require__(/*! rxjs/Rx */ 352);
	var defaultState = {
	    notes: [],
	    user: {}
	};
	var _store = new BehaviorSubject_1.BehaviorSubject(defaultState);
	var Store = (function () {
	    function Store() {
	        this._store = _store;
	        this.changes = this._store.asObservable().distinctUntilChanged();
	    }
	    Store.prototype.setState = function (state) {
	        this._store.next(state);
	        console.log('set state', state);
	    };
	    Store.prototype.getState = function () {
	        console.log('get state', this._store.value);
	        return this._store.value;
	    };
	    Store.prototype.purge = function () {
	        console.log('purge');
	        this._store.next(defaultState);
	    };
	    Store = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Store);
	    return Store;
	}());
	exports.Store = Store;


/***/ },

/***/ 610:
/*!**********************************!*\
  !*** ./src/app/services/auth.ts ***!
  \**********************************/
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
	var store_helper_1 = __webpack_require__(/*! ./store-helper */ 608);
	var store_1 = __webpack_require__(/*! ../store */ 609);
	var api_1 = __webpack_require__(/*! ./api */ 330);
	var router_1 = __webpack_require__(/*! @angular/router */ 611);
	__webpack_require__(/*! rxjs/Rx */ 352);
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
	        __metadata('design:paramtypes', [(typeof (_a = typeof store_helper_1.StoreHelper !== 'undefined' && store_helper_1.StoreHelper) === 'function' && _a) || Object, (typeof (_b = typeof api_1.ApiService !== 'undefined' && api_1.ApiService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object, (typeof (_d = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _d) || Object])
	    ], AuthService);
	    return AuthService;
	    var _a, _b, _c, _d;
	}());
	exports.AuthService = AuthService;


/***/ },

/***/ 630:
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
	var router_1 = __webpack_require__(/*! @angular/router */ 611);
	var common_1 = __webpack_require__(/*! ./ui/common */ 631);
	var App = (function () {
	    function App() {
	    }
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            directives: [
	                common_1.Navbar,
	                router_1.ROUTER_DIRECTIVES
	            ],
	            templateUrl: '/src/app/app.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },

/***/ 631:
/*!************************************!*\
  !*** ./src/app/ui/common/index.ts ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var navbar_component_1 = __webpack_require__(/*! ./navbar/navbar.component */ 632);
	exports.Navbar = navbar_component_1.Navbar;


/***/ },

/***/ 632:
/*!******************************************************!*\
  !*** ./src/app/ui/common/navbar/navbar.component.ts ***!
  \******************************************************/
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
	var router_1 = __webpack_require__(/*! @angular/router */ 611);
	var Navbar = (function () {
	    function Navbar() {
	    }
	    Navbar = __decorate([
	        core_1.Component({
	            selector: 'navbar',
	            directives: router_1.ROUTER_DIRECTIVES.slice(),
	            templateUrl: '/src/app/ui/common/navbar/navbar.template.html'
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Navbar);
	    return Navbar;
	}());
	exports.Navbar = Navbar;


/***/ },

/***/ 633:
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 611);
	var about_1 = __webpack_require__(/*! ./about */ 634);
	var blog_1 = __webpack_require__(/*! ./blog */ 635);
	var home_1 = __webpack_require__(/*! ./home */ 636);
	var shop_1 = __webpack_require__(/*! ./shop */ 637);
	exports.AppRoutes = [
	    {
	        path: '',
	        component: home_1.Home
	    },
	    {
	        path: 'blog',
	        component: blog_1.Blog
	    },
	    {
	        path: 'shop',
	        component: shop_1.Shop
	    },
	    {
	        path: 'about',
	        component: about_1.About
	    },
	    //{
	    //    path: 'auth',
	    //    component: Auth
	    //},
	    {
	        path: '**',
	        redirectTo: ''
	    }
	];
	exports.APP_ROUTER_PROVIDER = router_1.provideRouter(exports.AppRoutes);


/***/ },

/***/ 634:
/*!********************************!*\
  !*** ./src/app/about/index.js ***!
  \********************************/
/***/ function(module, exports) {

	//# sourceMappingURL=index.js.map

/***/ },

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/blog/index.js ***!
  \*******************************/
/***/ function(module, exports) {

	//# sourceMappingURL=index.js.map

/***/ },

/***/ 636:
/*!*******************************!*\
  !*** ./src/app/home/index.js ***!
  \*******************************/
/***/ function(module, exports) {

	//# sourceMappingURL=index.js.map

/***/ },

/***/ 637:
/*!*******************************!*\
  !*** ./src/app/shop/index.js ***!
  \*******************************/
/***/ function(module, exports) {

	//# sourceMappingURL=index.js.map

/***/ }

});
//# sourceMappingURL=main.map