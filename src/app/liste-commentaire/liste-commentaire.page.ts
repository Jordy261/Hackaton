import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-commentaire',
  templateUrl: './liste-commentaire.page.html',
  styleUrls: ['./liste-commentaire.page.scss'],
})
export class ListeCommentairePage {
  item: any;
  listeCommentaire: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.route.params.subscribe(params => {
      this.item = params;
      console.log(this.item);
      this.http.get("http://localhost:3000/commentaireAtelier/"+this.item.id).subscribe(result=>{
        console.log(result);
        this.listeCommentaire = result;
      })
    })
  }

  ngOnInit() {
  }

}
