"use strict";
var JsonService_1 = require("./JsonService");
var http_config_1 = require("../../config/http.config");
var ApiServiceFactory = (function () {
    function ApiServiceFactory(http) {
        this.http = http;
    }
    ApiServiceFactory.prototype.create = function (path) {
        var service = new JsonService_1.JsonService("" + http_config_1.HttpConfig.API_BASE_URL + path, this.http);
        return service;
    };
    return ApiServiceFactory;
}());
exports.ApiServiceFactory = ApiServiceFactory;
//# sourceMappingURL=ApiServiceFactory.js.map