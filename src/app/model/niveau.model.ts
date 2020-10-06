export class Niveau {
    private Id:number;
    private Nom:String;

	constructor($Nom: String) {
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


}
