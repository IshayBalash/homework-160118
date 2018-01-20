class pessenger extends persom {
    private _passportnumber: number;

    public set passportnumber(passportnumber: number) {
        this._passportnumber = passportnumber;
    }
    public get passportnumber(): number {
        return this._passportnumber;
    }
    public constructor(firstnameparam: string, secondnameparam: string,passportnumberparam: number) {
        super(firstnameparam, secondnameparam);
        this.passportnumber = passportnumberparam;

    }
    public print(): void {
        super.print();
        document.write(`passenger `);
        document.write(`passport number: ${this._passportnumber}<br/>`);  
    }

}