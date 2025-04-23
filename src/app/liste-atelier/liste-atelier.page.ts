import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste-atelier',
  templateUrl: './liste-atelier.page.html',
  styleUrls: ['./liste-atelier.page.scss'],
})
export class ListeAtelierPage {
  listeAtelier: any;
  item: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {

    this.route.params.subscribe(params => {
      this.item = params;
      console.log(this.item)
      this.http.get("http://localhost:3000/atelierHack/" + this.item.id).subscribe(result => {
        console.log(result);
        this.listeAtelier = result;

      })



    })


  }
  PageInscription(item: any) {
    console.log(item)

    this.router.navigate(["/inscription", item], { replaceUrl: true })
  }
  PageCommentaire(item: any) {
    this.router.navigate(["/avis", item], { replaceUrl: true })
  }
ListeCommentaire(item:any){
  this.router.navigate(["/liste-commentaire",item],{replaceUrl:true})
}
}
