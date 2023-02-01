import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContratPage } from './contrat.page';

const routes: Routes = [
  {
    path: '',
    component: ContratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratPageRoutingModule {}
