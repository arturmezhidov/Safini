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
var Slide_1 = require("../../../common/entities/Slide");
var SliderItem = (function () {
    function SliderItem() {
        this.state = "inactive";
    }
    SliderItem.prototype.activate = function () {
        this.state = "active";
    };
    SliderItem.prototype.disactivate = function () {
        this.state = "inactive";
    };
    SliderItem.prototype.toggle = function () {
        this.state = (this.state == "active") ? "inactive" : "active";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Slide_1.Slide)
    ], SliderItem.prototype, "slide", void 0);
    SliderItem = __decorate([
        core_1.Component({
            selector: 'slide',
            animations: [
                core_1.trigger('toggling', [
                    core_1.state('active', core_1.style({ opacity: 1 })),
                    core_1.state('inactive', core_1.style({ opacity: 0 })),
                    core_1.transition('inactive => active', core_1.animate('2s ease-in')),
                    core_1.transition('active => inactive', core_1.animate('1.5s ease-out'))
                ])
            ],
            templateUrl: '/src/app/user-interface/components/slider/slider-item.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SliderItem);
    return SliderItem;
}());
exports.SliderItem = SliderItem;
//# sourceMappingURL=slider-item.component.js.map