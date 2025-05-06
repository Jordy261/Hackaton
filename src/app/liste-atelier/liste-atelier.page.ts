import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

@Component({
  selector: 'app-liste-atelier',
  templateUrl: './liste-atelier.page.html',
  styleUrls: ['./liste-atelier.page.scss'],
})
export class ListeAtelierPage {

  listeAtelier: any;
  ListeEvent: any;
  item: any;
  favorisAtelier: any = [];
  isFavoris = false;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router, private storage: Storage) {

    let env = this;

    this.route.params.subscribe(params => {
      this.item = params;

      console.log(this.item)
      this.http.get("http://localhost:3000/atelierHack/" + this.item.id).subscribe(result => {
        console.log(result);
        env.listeAtelier = result;
        this.storage.create().then(error => {
          this.storage.get("favoris2").then(
            (data: any) => {
              if (data) {

                env.favorisAtelier = data;
                env.listeAtelier.forEach((element: any) => {
                  console.log(element);
                  var result = env.favorisAtelier.filter(function (fav: any) {
                    return fav.id === env.item.id;
                  })
                  if (result.length) element.isFavoris = true;
                  else element.isFavoris = false;


                });

                /*var result = env.favorisAtelier.filter(function(fav:any){
                  return fav.id===env.item.id;
                })
                if(result.length)env.isFavoris=true;*/

              }
              else env.favorisAtelier = [];
            }
          )

          //this.storage.set('series',{nom:"test"});
        })


      })
    })



  }

  addstorage(item: any) {
    this.favorisAtelier.push(item)
    this.isFavoris = true;
    item.isFavoris = true;
    this.storage.set('favoris2', this.favorisAtelier).then(err => {



      this.storage.get('favoris2').then(
        (data: any) => {
          console.log(data)
        }
      )
    })
  }

  delstorage(item: any) {
    const filteredFav =
      this.favorisAtelier.filter((itemf: any) => itemf.id !== item.id);
    this.isFavoris = false;
    item.isFavoris = false;
    this.favorisAtelier = filteredFav;
    console.log(filteredFav);
    console.log(this.favorisAtelier);
    this.storage.set('favoris2', this.favorisAtelier).then(err => { })
  }

  PageInscription(item: any) {
    console.log(item)

    this.router.navigate(["/inscription", item], { replaceUrl: true })
  }

  PageCommentaire(item: any) {
    this.router.navigate(["/avis", item], { replaceUrl: true })
  }
  ListeCommentaire(item: any) {
    this.router.navigate(["/liste-commentaire", item], { replaceUrl: true })
  }
}
