import { QuestionCours } from './question-cours.model';

export class ReponseCours {
    private Id:number;
    private DatePoste:Date;
    private Reponse:String;
    private QuestionCours:QuestionCours;


	constructor( $Reponse: String, $QuestionCours: QuestionCours) {
		this.Reponse = $Reponse;
		this.QuestionCours = $QuestionCours;
	}

    public getId(): number {
        return this.Id;
    }

    public setId(Id: number): void {
        this.Id = Id;
    }

    public getDatePoste(): Date {
        return this.DatePoste;
    }

    public setDatePoste(DatePoste: Date): void {
        this.DatePoste = DatePoste;
    }

    public getReponse(): String {
        return this.Reponse;
    }

    public setReponse(Reponse: String): void {
        this.Reponse = Reponse;
    }

    public getQuestionCours(): QuestionCours {
        return this.QuestionCours;
    }

    public setQuestionCours(QuestionCours: QuestionCours): void {
        this.QuestionCours = QuestionCours;
    }

    
}
