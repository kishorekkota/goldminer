import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Miner } from './miner.model'
@Injectable()
export class MinerService {


  miner: Miner = new Miner();



  buyManualMiner(): Miner
  {

    if(this.miner.goldowned < 10)
    {
      return this.miner;
    }

    this.miner.manualMiners = this.miner.manualMiners + 1;

    this.miner.goldowned = this.miner.goldowned - 10;

    return;
  }

  buyMachineMiner(): Miner
  {
    if(this.miner.goldowned < 100)
    {
      return this.miner;
    }

    this.miner.machineMiners = this.miner.machineMiners + 1;

    this.miner.goldowned = this.miner.goldowned - 100;

    return;
  }

  buyHeavyMachineMiner(): Miner
  {
    if(this.miner.goldowned < 1000)
    {
      return this.miner;
    }

    this.miner.heavyMachineMiners = this.miner.heavyMachineMiners + 1;

    this.miner.goldowned = this.miner.goldowned - 1000;

    return;
  }

  buyGranade(): Miner
  {
    if(this.miner.goldowned < 10000)
    {
      return this.miner;
    }

    this.miner.granades = this.miner.granades + 1;

    this.miner.goldowned = this.miner.goldowned - 10000;

    return;
  }

}
