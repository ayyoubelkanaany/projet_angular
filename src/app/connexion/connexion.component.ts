import { Component, OnInit } from '@angular/core';
import { InscriptioServiceService } from '../controlleur/inscriptio-service.service';
import { Utilisateur } from '../model/Utilisateur.model';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  utilisateur:Utilisateur = new Utilisateur();
  constructor(private inscriptionservice:InscriptioServiceService) { }

  ngOnInit(): void {

  }
connexion(){
  this.inscriptionservice.findUtilisateur(this.utilisateur.mail,this.utilisateur.password).subscribe(res => {
    if(res !=null)
    console.log("inscrit"+res.id);
  });
}
}
