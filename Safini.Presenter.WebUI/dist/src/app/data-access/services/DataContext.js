"use strict";
var http_config_1 = require("../../config/http.config");
var JsonService_1 = require("./JsonService");
var DataContext = (function () {
    function DataContext(http) {
        this.slides = new JsonService_1.JsonService("" + http_config_1.HttpConfig.API_BASE_URL + http_config_1.HttpConfig.API_SLIDE_URL, this.http);
        this.http = http;
    }
    return DataContext;
}());
exports.DataContext = DataContext;
//# sourceMappingURL=DataContext.js.map