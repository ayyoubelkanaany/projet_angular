import { Examen } from './examen.model';

export class QuestionExamen {
    private Id:number;
    private question:String;
    private Examen:Examen;

	constructor($question: String, $Examen: Examen) {
		this.question = $question;
		this.Examen = $Examen;
	}
    
    public getExamen(): Examen {
        return this.Examen;
    }

    public setExamen(Examen: Examen): void {
        this.Examen = Examen;
    }

    public getId(): number {
        return this.Id;
    }

    public setId(Id: number): void {
        this.Id = Id;
    }

    public getQuestion(): String {
        return this.question;
    }

    public setQuestion(question: String): void {
        this.question = question;
    }


}
