import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from './controlleur/Utilisateur.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    constructor(private utilisateurService: UtilisateurService) {
     }
  ngOnInit(): void {
      console.log("hello");
  }
}
