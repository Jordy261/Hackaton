import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


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
