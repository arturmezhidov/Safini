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
var TimerObservable_1 = require("rxjs/observable/TimerObservable");
var slider_list_component_1 = require('./slider-list.component');
var Slide_1 = require('../../../common/entities/Slide');
var Slider = (function () {
    function Slider() {
        this.defaultInterval = 5000;
        var slide1 = new Slide_1.Slide();
        slide1.imagePath = "/src/resources/images/slider/slide1.png";
        var slide2 = new Slide_1.Slide();
        slide2.imagePath = "/src/resources/images/slider/slide2.png";
        var slide3 = new Slide_1.Slide();
        slide3.imagePath = "/src/resources/images/slider/slide3.png";
        this.slides = [slide1, slide2, slide3];
    }
    Slider.prototype.start = function () {
        var _this = this;
        this.interval = this.interval || this.defaultInterval;
        this.list.reset();
        var timer = TimerObservable_1.TimerObservable.create(0, this.interval);
        this.subscription = timer.subscribe(function () {
            _this.list.next();
        });
    };
    Slider.prototype.stop = function () {
        if (!this.subscription.isUnsubscribed) {
            this.subscription.unsubscribe();
        }
    };
    Slider.prototype.ngAfterViewInit = function () {
        this.start();
    };
    Slider.prototype.ngOnDestroy = function () {
        this.stop();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Slider.prototype, "interval", void 0);
    __decorate([
        core_1.ViewChild(slider_list_component_1.SliderList), 
        __metadata('design:type', slider_list_component_1.SliderList)
    ], Slider.prototype, "list", void 0);
    Slider = __decorate([
        core_1.Component({
            selector: 'slider',
            directives: [
                slider_list_component_1.SliderList
            ],
            templateUrl: '/src/app/user-interface/components/slider/slider.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Slider);
    return Slider;
}());
exports.Slider = Slider;
//# sourceMappingURL=slider.component.js.map