import {NgModule} from "@angular/core";

import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component'
import {MinerComponent} from '../app/miner/shared/miner.component'
import {FaqComponent} from '../app/faq/faq.component'
import {TimerComponent} from '../app/timer/shared/timer.component'
import { routing }        from './app.routing';
import { HttpModule }    from '@angular/http';
import {APP_BASE_HREF} from '@angular/common';
import { MinerService } from '../app/miner/shared/miner.service'

@NgModule({
  imports: [BrowserModule,routing],
  declarations: [ AppComponent,MinerComponent,TimerComponent,FaqComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
                {provide: APP_BASE_HREF, useValue : '/' },
                MinerService
             ]

})

export class AppModule{


}
