import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangerMotDePassePage } from './changer-mot-de-passe.page';

const routes: Routes = [
  {
    path: '',
    component: ChangerMotDePassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangerMotDePassePageRoutingModule {}
