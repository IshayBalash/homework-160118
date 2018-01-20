class airstuarts extends persom {
    private _seniority: number;
    private _origin: string;
    private _class: number;

    public set origin(str: string) {
        this._origin = str;
    }

    public get origin(): string {
        return this._origin
    }

    public set class(number: number) {
        this._class = number;
    }

    public get class(): number {
        return this._class;
    }

    public set seniority(number: number) {
        this._seniority = number;
    }

    public get seniority(): number {
        return this._seniority
    }
    public constructor(firstnameparam: string, secondnameparam: string, originparam: string, seniorityparam: number, classparam: number) {
        super(firstnameparam, secondnameparam);
        this.origin = originparam;
        this.seniority = seniorityparam;
        this.class = classparam;

    }
    public print(): void {
        super.print();
        document.write(`job: air_stuarts<br/>`);
        document.write(`origin: ${this._origin}<br/>`)
        document.write(`seniority: ${this._seniority}<br/>`);
        document.write(`class: ${this._class}<br/>`);
    }



}
