class Student extends Person {
    private _place_of_study: string;
    public set place_of_study(str: string) {
        this._place_of_study = str
    }

    public get place_of_study(): string {
        return this._place_of_study
    }

    private _subject: string;
    public set subject(str: string) {
        this._subject = str
    }

    public get subject(): string {
        return this._subject
    }


    public printinfo(): void {
        super.printinfo();
        document.write("the person is a student<br/>");
        document.write(`the student studies in: ${this._place_of_study}<br/>`)
        document.write(`the student studies: ${this._subject}<br/>`);
    }

    public constructor(fullnameparam: string = "moshe", ageparam: number = 22, idparam: string = "123456789", ismaleparam: boolean = true) {
        super()
    }
   
}