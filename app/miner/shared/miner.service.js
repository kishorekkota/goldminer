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
var MinerService = (function () {
    function MinerService() {
    }
    //miner: Miner = new Miner();
    MinerService.prototype.buyManualMiner = function (miner) {
        if (miner.goldowned < 10) {
            console.log('aa..hole get me more gold');
            return miner;
        }
        miner.manualMiners = miner.manualMiners + 1;
        miner.goldowned = miner.goldowned - 10;
        return miner;
    };
    MinerService.prototype.buyMachineMiner = function (miner) {
        if (miner.goldowned < 100) {
            return miner;
        }
        miner.machineMiners = miner.machineMiners + 1;
        miner.goldowned = miner.goldowned - 100;
        return miner;
    };
    MinerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MinerService);
    return MinerService;
}());
exports.MinerService = MinerService;
//# sourceMappingURL=miner.service.js.map