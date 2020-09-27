import { Component, OnInit } from '@angular/core';
import { InscriptionService } from './controlleur/inscription.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    constructor(private inscriptionservice: InscriptionService) {

      console.log(this.inscriptionservice.User.Nom);
      this.inscriptionservice.User = new User;
      console.log(this.inscriptionservice.User.Nom);
     }
  ngOnInit(): void {
      console.log("hello");
  }
}
