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
var MinerService = (function () {
    function MinerService() {
        this.miner = new miner_model_1.Miner();
    }
    MinerService.prototype.buyManualMiner = function () {
        if (this.miner.goldowned < 10) {
            return this.miner;
        }
        this.miner.manualMiners = this.miner.manualMiners + 1;
        this.miner.goldowned = this.miner.goldowned - 10;
        return;
    };
    MinerService.prototype.buyMachineMiner = function () {
        if (this.miner.goldowned < 100) {
            return this.miner;
        }
        this.miner.machineMiners = this.miner.machineMiners + 1;
        this.miner.goldowned = this.miner.goldowned - 100;
        return;
    };
    MinerService.prototype.buyHeavyMachineMiner = function () {
        if (this.miner.goldowned < 1000) {
            return this.miner;
        }
        this.miner.heavyMachineMiners = this.miner.heavyMachineMiners + 1;
        this.miner.goldowned = this.miner.goldowned - 1000;
        return;
    };
    MinerService.prototype.buyGranade = function () {
        if (this.miner.goldowned < 10000) {
            return this.miner;
        }
        this.miner.granades = this.miner.granades + 1;
        this.miner.goldowned = this.miner.goldowned - 10000;
        return;
    };
    MinerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MinerService);
    return MinerService;
}());
exports.MinerService = MinerService;
//# sourceMappingURL=miner.service.js.map