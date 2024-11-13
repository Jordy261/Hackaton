
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  // Fonction pour voir la liste des hackathons
  voirHackathons() {
    this.navCtrl.navigateForward('/hackathons-list');  // Rediriger vers la page des hackathons
  }

}
