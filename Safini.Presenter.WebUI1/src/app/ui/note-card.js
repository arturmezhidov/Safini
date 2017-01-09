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
var NoteCard = (function () {
    function NoteCard() {
        this.note = {};
        this.checked = new core_1.EventEmitter();
        this.showCheck = false;
    }
    NoteCard.prototype.toggleCheck = function () {
        this.showCheck = !this.showCheck;
    };
    NoteCard.prototype.onChecked = function () {
        this.checked.next(this.note);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NoteCard.prototype, "note", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NoteCard.prototype, "checked", void 0);
    NoteCard = __decorate([
        core_1.Component({
            selector: 'note-card',
            styles: ["\n    .note-card {\n      padding: 15px;\n      border-radius: 2px;\n      width: 100%;\n      position: relative;\n      margin-bottom: 20px;\n    }\n    .title {\n      font-size: 1.2rem;\n      font-weight: bold;\n      text-align: left;\n      color: rgba(0,0,0,0.8);\n    }\n    .value {\n      text-align: left;\n      font-size: 1.4rem;\n      font-weight: 200;\n    }\n    .icon {\n      position: absolute;\n      color: black;\n      border: 1px solid lightgrey;\n      background-color: white;\n      font-size: 30px;\n      top: -10px;\n      left: -10px;\n      width: 40px;\n      height: 40px;\n      border-radius: 100%;\n      cursor: pointer;\n    }\n  "],
            template: "\n    <div\n      class=\"note-card row shadow-1\"\n      [ngStyle]=\"{'background-color': note.color}\"\n      (mouseenter)=\"toggleCheck()\"\n      (mouseleave)=\"toggleCheck()\"\n    >\n      <div class=\"icon\" *ngIf=\"showCheck\" (click)=\"onChecked()\">\n        <i class=\"material-icons\">check</i>\n      </div>\n      <div class=\"col-xs-12 title\">\n        {{ note.title }}\n      </div>\n      <div class=\"col-xs-12 value\">\n        {{ note.value }}\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NoteCard);
    return NoteCard;
}());
exports.NoteCard = NoteCard;
//# sourceMappingURL=note-card.js.map