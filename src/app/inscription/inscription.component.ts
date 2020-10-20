import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscriptioServiceService } from '../controlleur/inscriptio-service.service';
import { Niveau } from '../model/niveau.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  utilisateur:Utilisateur;
  Niveaus:Array<Niveau> ;
  constructor(private inscriptionservice:InscriptioServiceService,private router: Router){
    this.utilisateur = new Utilisateur();
  
}
  ngOnInit(): void {
    
    this.inscriptionservice.getNiveau().subscribe(res => {
      this.Niveaus = res;
    });
  }
  public save(){
    this.inscriptionservice.SaveUtilisateur(this.utilisateur);
  }
  onChange(cityindex) {
    this.utilisateur.niveau.id = cityindex;
  }
  NomVAlidation(event: String){
    if(event.length<3){
      console.log("trop petit")
    }
    else{
      console.log("correct")
    }
   
  }
  //handleFileInput(files: FileList) {this.inscriptionservice.saveImage(files.item(0));}
}