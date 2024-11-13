import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HackatonPage } from './hackaton.page';

const routes: Routes = [
  {
    path: '',
    component: HackatonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HackatonPageRoutingModule {}
