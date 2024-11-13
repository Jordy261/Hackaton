<<<<<<< HEAD
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
=======
>>>>>>> 638aecc25ae82c3a2ed823898081a8685629a4c8

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
<<<<<<< HEAD

  constructor(private navCtrl: NavController) {}

  // Fonction pour voir la liste des hackathons
  voirHackathons() {
    this.navCtrl.navigateForward('/hackathons-list');  // Rediriger vers la page des hackathons
  }

  // Fonction pour s'inscrire
  inscriptionHackathon() {
    this.navCtrl.navigateForward('/register');  // Rediriger vers la page d'inscription
  }
=======
  ListeEvent:any;
  constructor(  private http : HttpClient , private router:Router ) {
    
    this.http.get("http://localhost:3000").subscribe(result => {
      console.log(result);
      this.ListeEvent= result;
    
    })
  }
     
>>>>>>> 638aecc25ae82c3a2ed823898081a8685629a4c8
}
