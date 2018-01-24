class Teacher extends Person {
    private _subject: string;
    public set subject(str: string) {
        this._subject = str
    }

    public get subject(): string {
        return this._subject
    }
    private _seniority: string;

    public set seniority(str: string) {
        this._seniority = str
    }

    public get seniority(): string {
        return this._seniority
    }

    public printinfo(): void {
        super.printinfo();
        document.write("the person is a teacher<br/>");
        document.write(`the teacher have been teaching for: ${this._seniority}<br/>`)
        document.write(`the teacher teach: ${this._subject}<br/>`);
    }
    public constructor(fullnameparam: string = "moshe", ageparam: number = 22, idparam: string = "123456789", ismaleparam: boolean = true) {
        super()
    }


}