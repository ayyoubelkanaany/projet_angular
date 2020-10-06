import { Matiere } from './matiere.model';


export class Examen {
    private Id:number;
    private Duree:number;
    private DateOvertur:Date;
    private Matierr:Matiere;
    
	constructor($Duree: number, $DateOvertur: Date, $Matierr: Matiere) {
		this.Duree = $Duree;
		this.DateOvertur = $DateOvertur;
		this.Matierr = $Matierr;
	}
    

    public getId(): number {
        return this.Id;
    }

    public setId(Id: number): void {
        this.Id = Id;
    }

    public getDuree(): number {
        return this.Duree;
    }

    public setDuree(Duree: number): void {
        this.Duree = Duree;
    }

    public getDateOvertur(): Date {
        return this.DateOvertur;
    }

    public setDateOvertur(DateOvertur: Date): void {
        this.DateOvertur = DateOvertur;
    }

    public getMatierr(): Matiere {
        return this.Matierr;
    }

    public setMatierr(Matierr: Matiere): void {
        this.Matierr = Matierr;
    }



}
