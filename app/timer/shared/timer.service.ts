import { Injectable } from '@angular/core';
import { TimerTrack } from './timertrack.model';

@Injectable()
export class TimerService {



  constructor()
  {

  }

  startTimer()
  {
    var starttime : TimerTrack = new TimerTrack();

    starttime.start = new Date();

    return Promise.resolve(starttime);
  }

  endTimer( timer : TimerTrack )
  {
    timer.end = new Date();

    return Promise.resolve(timer);
  }


  

}
