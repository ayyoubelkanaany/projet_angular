import { Niveau } from './niveau.model';

	
export class Utilisateur {
    public id: number;
    public nom : String;
    public prenom: String;
    public telephone: number;
    public age : number;
    public mail: String;
    public adress: String;
    public image:String;
    public niveau:Niveau = new Niveau();
    public password:String;
	constructor() {
		
	}

   
    
}
