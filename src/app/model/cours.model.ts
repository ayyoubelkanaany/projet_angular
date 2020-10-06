import { CategorieCours } from './categorie-cours.model';
import { Utilisateur } from './Utilisateur.model';

export class Cours {
    private Id:number;
    private DateAjout:Date;
    private Posteur:Utilisateur;
    private Consulteur:Array<Utilisateur>;
    private Categorie:CategorieCours;


	constructor( $Posteur: Utilisateur,  $Categorie: CategorieCours) {
		this.Posteur = $Posteur;
		this.Categorie = $Categorie;
	}

    public getId(): number {
        return this.Id;
    }

    public setId(Id: number): void {
        this.Id = Id;
    }

    public getDateAjout(): Date {
        return this.DateAjout;
    }

    public setDateAjout(DateAjout: Date): void {
        this.DateAjout = DateAjout;
    }

    public getPosteur(): Utilisateur {
        return this.Posteur;
    }

    public setPosteur(Posteur: Utilisateur): void {
        this.Posteur = Posteur;
    }

    public getConsulteur(): Array<Utilisateur> {
        return this.Consulteur;
    }

    public setConsulteur(Consulteur: Array<Utilisateur>): void {
        this.Consulteur = Consulteur;
    }

    public getCategorie(): CategorieCours {
        return this.Categorie;
    }

    public setCategorie(Categorie: CategorieCours): void {
        this.Categorie = Categorie;
    }

}
