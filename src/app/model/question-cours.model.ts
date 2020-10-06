import { Cours } from './cours.model';

export class QuestionCours {
    private Id:number;
    private Question:String;
    private DatePoste:Date;
    private Cours:Cours;

	constructor($Question: String, $Cours: Cours) {
		this.Question = $Question;
		this.Cours = $Cours;
	}

    public getId(): number {
        return this.Id;
    }

    public setId(Id: number): void {
        this.Id = Id;
    }

    public getQuestion(): String {
        return this.Question;
    }

    public setQuestion(Question: String): void {
        this.Question = Question;
    }

    public getDatePoste(): Date {
        return this.DatePoste;
    }

    public setDatePoste(DatePoste: Date): void {
        this.DatePoste = DatePoste;
    }

    public getCours(): Cours {
        return this.Cours;
    }

    public setCours(Cours: Cours): void {
        this.Cours = Cours;
    }


}
