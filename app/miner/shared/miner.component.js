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
var miner_model_1 = require('./miner.model');
var miner_service_1 = require('./miner.service');
var Rx_1 = require('rxjs/Rx');
var MinerComponent = (function () {
    function MinerComponent(minerservice) {
        this.minerservice = minerservice;
        this.miner = null;
    }
    MinerComponent.prototype.ngOnInit = function () {
        console.log("Ng Init from miner component");
        this.miner = new miner_model_1.Miner();
    };
    MinerComponent.prototype.calculateGold = function () {
        //console.log(' Calculate Gold ');
        //console.log(this.miner);
        //console.log(new Date());
        //window.setInterval(this.calculateGoldMinedByManualMiner(),1000);
        var _this = this;
        if (this.miner.gamestarted) {
            console.log('game started already');
            return;
        }
        var timer1 = Rx_1.Observable.timer(2000, 1000);
        timer1.subscribe(function (t) { return _this.calculateGoldMinedByManualMiner(); });
        var timer2 = Rx_1.Observable.timer(2000, 500);
        timer2.subscribe(function (t) { return _this.calculateGoldMinedByMachineMiner(); });
        var timer3 = Rx_1.Observable.timer(2000, 100);
        timer3.subscribe(function (t) { return _this.calculateGoldMinedByHeavyMiner(); });
        this.miner.gamestarted = true;
    };
    MinerComponent.prototype.calculateGoldMinedByManualMiner = function () {
        //console.log(new Date());
        //console.log(this.miner.goldowned);
        this.miner.goldowned = this.miner.goldowned + this.miner.manualMiners * 1;
        //this.calculateGold();
    };
    MinerComponent.prototype.calculateGoldMinedByMachineMiner = function () {
        //console.log(new Date());
        //console.log(this.miner.goldowned);
        this.miner.goldowned = this.miner.goldowned + this.miner.machineMiners * 10;
        //this.calculateGold();
    };
    MinerComponent.prototype.calculateGoldMinedByHeavyMiner = function () {
        //console.log(new Date());
        //console.log(this.miner.goldowned);
        this.miner.goldowned = this.miner.goldowned + this.miner.heavyMachineMiners * 20;
        //this.calculateGold();
    };
    MinerComponent.prototype.buyMiner = function () {
        console.log('buy miner');
        this.miner = this.minerservice.buyManualMiner(this.miner);
    };
    MinerComponent.prototype.buyMachineMiner = function () {
        console.log('buy miner');
        this.miner = this.minerservice.buyMachineMiner(this.miner);
    };
    MinerComponent.prototype.buyHeavyMachineMiner = function () {
        console.log('buy miner');
        this.miner = this.minerservice.buyMachineMiner(this.miner);
    };
    MinerComponent = __decorate([
        core_1.Component({
            selector: 'miner-component',
            templateUrl: '/app/miner/shared/miner.html',
            styleUrls: ['/app/miner/shared/miner.component.css', '/app/app.component.css'],
        }), 
        __metadata('design:paramtypes', [miner_service_1.MinerService])
    ], MinerComponent);
    return MinerComponent;
}());
exports.MinerComponent = MinerComponent;
//# sourceMappingURL=miner.component.js.map