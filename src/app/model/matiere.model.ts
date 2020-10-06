import { Niveau } from './niveau.model';

export class Matiere {
    private Id:number;
    private Nom:String;
    private Niveaus:Array<Niveau>;


	constructor($Nom: String, ) {
		this.Nom = $Nom;
	}

    public getId(): number {
        return this.Id;
    }

    public setId(Id: number): void {
        this.Id = Id;
    }

    public getNom(): String {
        return this.Nom;
    }

    public setNom(Nom: String): void {
        this.Nom = Nom;
    }

    public getNiveaus(): Array<Niveau> {
        return this.Niveaus;
    }

    public setNiveaus(Niveaus: Array<Niveau>): void {
        this.Niveaus = Niveaus;
    }


}
