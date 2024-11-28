import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hackaton',
  templateUrl: './hackaton.page.html',
  styleUrls: ['./hackaton.page.scss'],
})

export class HackatonPage {
  ListeEvent:any;
  item:any;
  constructor(  private http : HttpClient ,private route:ActivatedRoute, private router:Router) {



    this.http.get("http://localhost:3000").subscribe(result => {
      console.log(result);
      this.ListeEvent= result;
   });




  }

  voirAtelier(item:any){
    console.log(item)
    this.router.navigate(["/liste-atelier",item],{replaceUrl:true})
  }
}

 


