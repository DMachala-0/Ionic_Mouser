import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartinfoPage } from './partinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PartinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartinfoPageRoutingModule {}
