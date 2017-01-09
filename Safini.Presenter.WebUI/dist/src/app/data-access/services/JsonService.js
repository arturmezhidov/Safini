"use strict";
var Observable_1 = require('rxjs/Observable');
var http_1 = require('@angular/http');
var JsonService = (function () {
    function JsonService(baseUrl, http) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json'
        });
    }
    JsonService.prototype.getAll = function () {
        var result = this.http.get(this.baseUrl, { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        return result;
    };
    JsonService.prototype.getById = function (entityId) {
        var result = this.http.get(this.baseUrl + "/" + entityId, { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        return result;
    };
    JsonService.prototype.create = function (entity) {
        var result = this.http.post(this.baseUrl, JSON.stringify(entity), { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        return result;
    };
    JsonService.prototype.update = function (entity) {
        var result = this.http.put(this.baseUrl, JSON.stringify(entity), { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        return result;
    };
    JsonService.prototype.delete = function (entity) {
        var result = this.http.delete("" + this.baseUrl + entity.id, { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        return result;
    };
    JsonService.prototype.getJson = function (response) {
        return response.json();
    };
    JsonService.prototype.checkForError = function (response) {
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
    return JsonService;
}());
exports.JsonService = JsonService;
//# sourceMappingURL=JsonService.js.map