import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Miner } from './miner.model'
@Injectable()
export class MinerService {


  //miner: Miner = new Miner();



  buyManualMiner(miner: Miner): Miner
  {

    if(miner.goldowned < 10)
    {
      console.log('aa..hole get me more gold');
      return miner;
    }

    miner.manualMiners = miner.manualMiners + 1;

    miner.goldowned = miner.goldowned - 10;



    return miner;
  }

  buyMachineMiner(miner: Miner): Miner
  {
    if(miner.goldowned < 100)
    {
      return miner;
    }

    miner.machineMiners = miner.machineMiners + 1;

    miner.goldowned = miner.goldowned - 100;

    return miner;
  }
  /*
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
  */
}
