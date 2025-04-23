import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCommentairePageRoutingModule } from './liste-commentaire-routing.module';

import { ListeCommentairePage } from './liste-commentaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCommentairePageRoutingModule
  ],
  declarations: [ListeCommentairePage]
})
export class ListeCommentairePageModule {}
