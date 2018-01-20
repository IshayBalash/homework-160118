class groundstuarts extends persom {
    private _seniority: number;
    private _origin: string;
    private _groundjob: number;

    public set origin(str: string) {
        this._origin = str;
    }

    public get origin(): string {
        return this._origin
    }

    public set groundjob(number: number) {
        this._groundjob = number;
    }

    public get groundjob(): number {
        return this._groundjob;
    }

    public set seniority(number: number) {
        this._seniority = number;
    }

    public get seniority(): number {
        return this._seniority
    }
    public constructor(firstnameparam: string, secondnameparam: string, originparam: string, seniorityparam: number, groundjobparam: number) {
        super(firstnameparam, secondnameparam);
        this.origin = originparam;
        this.seniority = seniorityparam;
        this.groundjob = groundjobparam;

    }
    public print(): void {
        super.print();
        document.write(`job: ground stuarts<br/>`);
        document.write(`origin: ${this._origin}<br/>`)
        document.write(`seniority: ${this._seniority}<br/>`);
        document.write(`ground job: ${this._groundjob}<br/>`);
    }
}