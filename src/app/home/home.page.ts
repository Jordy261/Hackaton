
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
item:any;
  constructor(private http : HttpClient, private navCtrl: NavController, private router:Router) {}

  // Fonction pour voir la liste des hackathons
  voirHackathons() {
    console.log("ici")
    /*let navExtras:NavigationExtras=
    {
      state:{
        
        param1: "j'arrive de page home"

    }}*/
    this.router.navigate(["/hackaton"],{replaceUrl:true})
  }

  

  favoris(){
    
    this.router.navigate(["/favoris"],{replaceUrl:true})
  }

  
}
