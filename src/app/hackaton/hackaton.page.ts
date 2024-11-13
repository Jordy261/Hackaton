import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-hackaton',
  templateUrl: './hackaton.page.html',
  styleUrls: ['./hackaton.page.scss'],
})

export class HackatonPage {
  ListeEvent:any;
  constructor(  private http : HttpClient , private router:Router) {

    this.http.get("http://localhost:3000").subscribe(result => {
      console.log(result);
      this.ListeEvent= result;
   });
  }
}

 


