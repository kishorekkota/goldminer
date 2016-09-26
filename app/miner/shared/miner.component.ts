import { Component } from '@angular/core';


@Component({

  selector: 'miner-component',
  templateUrl:'app/timer/shared/miner.html'

})
export class MinerComponent implements OnInit
{

  miners: Miner = 

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }


}
