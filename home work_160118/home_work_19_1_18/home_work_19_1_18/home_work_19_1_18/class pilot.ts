class pilot extends persom {
    private _numberlicence: number;
    private _seniority: number;

    public set numberoflicence(number: number) {
        this._numberlicence = number;
    }

    public get numberoflicence(): number {
        return this._numberlicence
    }

    public set seniority(number: number) {
        this._seniority = number;
    }

    public get seniority(): number {
        return this._seniority
    }
    public print(): void {
        super.print();
        document.write(`job: pilot<br/>`);
        document.write(`number of licence: ${this._numberlicence}<br/>`)
        document.write(`seniority: ${this._seniority}<br/>`);
    }


    public constructor(firstnameparam: string, secondnameparam: string, numberoflicenceparam: number, seniorityparam: number) {
        super(firstnameparam, secondnameparam);
        this.numberoflicence = numberoflicenceparam;
        this.seniority = seniorityparam
    }
}