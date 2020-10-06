import { Niveau } from './niveau.model';

	
export class Utilisateur {
    private Id: number;
    private Nom : String;
    private Prenom: String;
    private Telephone: number;
    private Age : number;
    private Mail: String;
    private Adress: String;
    private image:String;
    private Niveau:Niveau;

    constructor($Nom: String, $Prenom: String,) {
		this.Nom = $Nom;
		this.Prenom = $Prenom;
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

    public getPrenom(): String {
        return this.Prenom;
    }

    public setPrenom(Prenom: String): void {
        this.Prenom = Prenom;
    }

    public getTelephone(): number {
        return this.Telephone;
    }

    public setTelephone(Telephone: number): void {
        this.Telephone = Telephone;
    }

    public getAge(): number {
        return this.Age;
    }

    public setAge(Age: number): void {
        this.Age = Age;
    }

    public getMail(): String {
        return this.Mail;
    }

    public setMail(Mail: String): void {
        this.Mail = Mail;
    }

    public getAdress(): String {
        return this.Adress;
    }

    public setAdress(Adress: String): void {
        this.Adress = Adress;
    }

    public getImage(): String {
        return this.image;
    }

    public setImage(image: String): void {
        this.image = image;
    }
    public getNiveau(): Niveau {
        return this.Niveau;
    }

    public setNiveau(Niveau: Niveau): void {
        this.Niveau = Niveau;
    }

}
