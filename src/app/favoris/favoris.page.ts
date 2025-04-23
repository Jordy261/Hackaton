import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage  {
  favorisAtelier: any[] = [];

  constructor(private storage: Storage, private router: Router) {
    this.storage.create().then(() => {
      this.loadFavoris();
    });
  }

  loadFavoris() {
    this.storage.get('favoris2').then((data) => {
      if (data) {
        this.favorisAtelier = data;
      } else {
        this.favorisAtelier = [];
      }
      console.log('Favoris récupérés:', this.favorisAtelier);
    });
  }

}
