import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../model/Utilisateur.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  private utilisateur = new Utilisateur('El kanaany','Ayyoub');
  constructor() {
    this.utilisateur.setAdress('Marakech');
   }

  ngOnInit(): void {
    console.log(this.utilisateur.getAdress())
  }

  
}
