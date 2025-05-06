import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  user: any = { nom: '', prenom: '', email: '', montant:'' }; // Modèle pour capturer les données du formulaire
  atelier: any; // Contient les données passées via la route

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // Récupération des paramètres de la route
    this.route.params.subscribe((params) => {
      this.atelier = params;
      console.log(this.atelier);
    });
  }

  onSubmit() {
    // Enregistrement des données utilisateur
    this.http.post('http://localhost:3000/utilisateur', this.user).subscribe((result: any) => {
      console.log('Utilisateur créé:', result);
  
      //if (this.atelier && this.atelier.id) {
        const participation = {
          id_utilisateur: result.id,
          id_event: this.atelier.id,
          montantUtil: this.user.montant
        };

        console.log(participation)
  
        // Enregistrement de la participation à l'événement
        this.http.post('http://localhost:3000/participer', participation).subscribe((res: any) => {
          console.log('Participation enregistrée avec succès:', res);
          }, (err) => {
          console.error('Erreur lors de l\'enregistrement de la participation :', err);
          alert('Une erreur est survenue lors de l\'enregistrement de votre participation.');
        });

      //}
    }, (err) => {
      console.error('Erreur lors de la création de l\'utilisateur :', err);
      alert('Une erreur est survenue lors de la création de l\'utilisateur.');
    });
  }
}