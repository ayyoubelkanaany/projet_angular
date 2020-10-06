import { QuestionExamen } from './question-examen.model';
export class ReponseExamen {
    private Id : number;
    private Etat:Boolean;
    private Question:QuestionExamen;
    

	constructor( $Etat: Boolean, $Question: QuestionExamen) {
	
		this.Etat = $Etat;
		this.Question = $Question;
	}

    public getId(): number {
        return this.Id;
    }

    public setId(Id: number): void {
        this.Id = Id;
    }

    public isEtat(): Boolean {
        return this.Etat;
    }

    public setEtat(Etat: Boolean): void {
        this.Etat = Etat;
    }

    public getQuestion(): QuestionExamen {
        return this.Question;
    }

    public setQuestion(Question: QuestionExamen): void {
        this.Question = Question;
    }

    

}
