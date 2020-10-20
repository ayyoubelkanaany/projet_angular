import { HttpClient, HttpEvent, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable, ɵɵresolveBody } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Niveau } from '../model/niveau.model';
import { Utilisateur } from '../model/Utilisateur.model';

@Injectable({
  providedIn: 'root'
}) 
export class InscriptioServiceService {
 baseurl ='http://localhost:8090/Utilisateur';
 baseurl2 ='http://localhost:8090/Niveau';
 baseurl3 ='http://localhost:8090/uploadFile';
 constructor(private http: HttpClient,private router: Router) {}
 ///recuperer les niveau d'etudes
 getNiveau():Observable<Array<Niveau>> {
  return this.http.get<Array<Niveau>>(this.baseurl2)
}
   /////pour sauvegarder l'utilisateur
   SaveUtilisateur(utilisateur){
    this.http.post<Utilisateur>(this.baseurl, utilisateur).subscribe(res=>{
    if(res !=null){
      this.router.navigate(['/connexion']);
    }
    else{
      console.log("mistakes");
    }
    })
  }
  ///trouver un utilisateur avec son id
  findUtilisateur(mail,password):Observable<Utilisateur>{
    return this.http.get<Utilisateur>(this.baseurl+'/connexion?mail='+mail+'&password='+password)
  }
  
  //sauvegarder l'image de l'utilisateur
  saveImage(file: File){
    const formData: FormData = new FormData();
    formData.append('file', file);
    this.http.post<any>(this.baseurl3, formData).subscribe(res=>{
     console.log(res);
  })
}
 
}
