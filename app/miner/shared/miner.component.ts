import { Component, OnInit } from '@angular/core';
import { Miner } from './miner.model'
import { MinerService } from './miner.service'
import { Observable } from 'rxjs/Rx';


@Component({

  selector: 'miner-component',
  templateUrl:'/app/miner/shared/miner.html',
  styleUrls: ['/app/miner/shared/miner.component.css','/app/app.component.css'],
})

export class MinerComponent implements OnInit
{

  miner: Miner = null;

  constructor(private minerservice: MinerService)
  {

  }

  ngOnInit(): void {
    console.log("Ng Init from miner component")
    this.miner = new Miner();
  }


  calculateGold(): void {
    //console.log(' Calculate Gold ');
    //console.log(this.miner);
    //console.log(new Date());
    //window.setInterval(this.calculateGoldMinedByManualMiner(),1000);

    if(this.miner.gamestarted)
    {
      console.log('game started already');
      return;
    }

    let timer1 = Observable.timer(2000,1000);
    timer1.subscribe(t => this.calculateGoldMinedByManualMiner());
    let timer2 = Observable.timer(2000,500);
    timer2.subscribe(t => this.calculateGoldMinedByMachineMiner());
    let timer3 = Observable.timer(2000,100);
    timer3.subscribe(t => this.calculateGoldMinedByHeavyMiner());

    this.miner.gamestarted = true;
  }

  calculateGoldMinedByManualMiner()
  {
    //console.log(new Date());
    //console.log(this.miner.goldowned);
    this.miner.goldowned = this.miner.goldowned + this.miner.manualMiners * 1;
    //this.calculateGold();
  }

  calculateGoldMinedByMachineMiner()
  {
    //console.log(new Date());
    //console.log(this.miner.goldowned);
    this.miner.goldowned = this.miner.goldowned + this.miner.machineMiners * 10;
    //this.calculateGold();
  }
  calculateGoldMinedByHeavyMiner()
  {
    //console.log(new Date());
    //console.log(this.miner.goldowned);
    this.miner.goldowned = this.miner.goldowned + this.miner.heavyMachineMiners * 20;
    //this.calculateGold();
  }


  buyMiner(): void
  {
    console.log('buy miner');
    this.miner = this.minerservice.buyManualMiner(this.miner);
  }
  buyMachineMiner(): void
  {
    console.log('buy miner');
    this.miner = this.minerservice.buyMachineMiner(this.miner);
  }
  buyHeavyMachineMiner(): void
  {
    console.log('buy miner');
    this.miner = this.minerservice.buyMachineMiner(this.miner);
  }



}
