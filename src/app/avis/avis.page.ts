import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.page.html',
  styleUrls: ['./avis.page.scss'],
})
export class AvisPage  {
  user2: any = {  email_utilForm: '', commentaire_utilForm:'' };
  avisUtil:any;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router) { 
    this.route.params.subscribe((params) => {
      this.avisUtil = params;
      
    });
   
  }

  onSubmit() {
    console.log(this.avisUtil);
    const insertAvis ={
      id_event_atelier: this.avisUtil.id,
      emailAvis: this.user2.email_utilForm,
      commentaireAvis: this.user2.commentaire_utilForm
    }
    console.log(insertAvis);
    this.http.post('http://localhost:3000/commentaire',insertAvis).subscribe((res:any)=>{
      console.log('Commentaire enregistrée avec succès:', res);
      alert('Commentaire envoyé')
    }, (err) => {
    console.error('Erreur lors de l\'enregistrement du commentaire :', err);
    alert('Une erreur est survenue lors de l\'enregistrement de votre commentaire.');
    })
    
    

  }

}
