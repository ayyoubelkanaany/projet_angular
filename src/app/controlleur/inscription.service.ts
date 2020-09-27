import { Injectable } from '@angular/core';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  private user: User;

  public get User(){
    if(this.user == null){
      this.user = new User();
    }
    return this.user;
  } 
  public set User(user: User){
    this.user = user;
  }
  constructor() {
    this.user = new User(); 
    this.user.Nom = "el kanaany";
   }
   }
