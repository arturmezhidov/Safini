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
var slider_item_component_1 = require('./slider-item.component');
var SliderList = (function () {
    function SliderList() {
        this.reset();
    }
    SliderList.prototype.reset = function () {
        this.currentIndex = -1;
    };
    SliderList.prototype.next = function () {
        this.disactivateByIndex(this.currentIndex);
        this.currentIndex++;
        if (this.currentIndex >= this.viewSlides.length) {
            this.currentIndex = 0;
        }
        this.activateByIndex(this.currentIndex);
    };
    SliderList.prototype.last = function () {
        this.disactivateByIndex(this.currentIndex);
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.viewSlides.length - 1;
        }
        this.activateByIndex(this.currentIndex);
    };
    SliderList.prototype.activateByIndex = function (index) {
        if (0 <= index && index < this.viewSlides.length) {
            this.viewSlides[index].activate();
        }
    };
    SliderList.prototype.disactivateByIndex = function (index) {
        if (0 <= index && index < this.viewSlides.length) {
            this.viewSlides[index].disactivate();
        }
    };
    SliderList.prototype.ngAfterViewInit = function () {
        this.viewSlides = this.children == null
            ? []
            : this.children.toArray();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SliderList.prototype, "slides", void 0);
    __decorate([
        core_1.ViewChildren(slider_item_component_1.SliderItem), 
        __metadata('design:type', core_1.QueryList)
    ], SliderList.prototype, "children", void 0);
    SliderList = __decorate([
        core_1.Component({
            selector: 'slider-list',
            directives: [
                slider_item_component_1.SliderItem
            ],
            templateUrl: '/src/app/user-interface/components/slider/slider-list.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SliderList);
    return SliderList;
}());
exports.SliderList = SliderList;
//# sourceMappingURL=slider-list.component.js.map