import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinerComponent } from './miner/shared/miner.component';
import { FaqComponent } from './faq/faq.component';

const appRoutes: Routes = [
  {
    path: 'startgame',
    component: MinerComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: '',
    redirectTo: '/faq',
    pathMatch: 'full'
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
