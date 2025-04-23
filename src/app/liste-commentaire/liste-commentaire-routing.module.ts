import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCommentairePage } from './liste-commentaire.page';

const routes: Routes = [
  {
    path: '',
    component: ListeCommentairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCommentairePageRoutingModule {}
