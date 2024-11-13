
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
  ListeEvent:any;
  constructor(  private http : HttpClient , private router:Router ) {
    
    this.http.get("http://localhost:3000").subscribe(result => {
      console.log(result);
      this.ListeEvent= result;
    
    })
  }
     
}
