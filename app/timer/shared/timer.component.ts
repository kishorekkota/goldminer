import { Component } from '@angular/core';

import { TimerTrack } from './timertrack.model';

import { TimerService } from './timer.service';

@Component({

selector:'track-time',
templateUrl:'app/timer/shared/track-timer.html'


})


export class TimerComponent {

  timer: TimerTrack = null;

  //timersvcs: TimerService;

  constructor(private timersvcs : TimerService)
  {
    //this.timersvcs = timersvcs1;
  }


  starttimer(): void
  {
    this.timersvcs.startTimer().then(
        timersvcs => this.timer = timersvcs
    );
  }

  pausetimer(): void
  {
    this.timersvcs.endTimer(this.timer).then(
        timersvcs => this.timer = timersvcs
    );
  }

  getTimeTaken(): Number
  {
    let current:  Date = new Date();

    let timediff : Number;

    timediff = current.getTime() - this.timer.start.getTime();

    return timediff;
  }

}
