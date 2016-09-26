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
var timer_service_1 = require('./timer.service');
var TimerComponent = (function () {
    //timersvcs: TimerService;
    function TimerComponent(timersvcs) {
        this.timersvcs = timersvcs;
        this.timer = null;
        //this.timersvcs = timersvcs1;
    }
    TimerComponent.prototype.starttimer = function () {
        var _this = this;
        this.timersvcs.startTimer().then(function (timersvcs) { return _this.timer = timersvcs; });
    };
    TimerComponent.prototype.pausetimer = function () {
        var _this = this;
        this.timersvcs.endTimer(this.timer).then(function (timersvcs) { return _this.timer = timersvcs; });
    };
    TimerComponent.prototype.getTimeTaken = function () {
        var current = new Date();
        var timediff;
        timediff = current.getTime() - this.timer.start.getTime();
        return timediff;
    };
    TimerComponent = __decorate([
        core_1.Component({
            selector: 'track-time',
            templateUrl: 'app/timer/shared/track-timer.html'
        }), 
        __metadata('design:paramtypes', [timer_service_1.TimerService])
    ], TimerComponent);
    return TimerComponent;
}());
exports.TimerComponent = TimerComponent;
//# sourceMappingURL=timer.component.js.map