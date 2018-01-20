class persom {
    private _firstname: string;
    private _secondname: string;
    private static numofperson: number = 0

    public static get numofpepole(): number {
        return persom.numofperson
       }

    public set firstname(name: string) {
        this._firstname = name
    }
    public get firstname(): string {
        return this._firstname
    }
    public set lastname(name: string) {
        this._secondname = name
    }
    public get lastname(): string {
        return this._secondname
    }

    public print(): void {
        document.write(`first name: ${this._firstname}<br/> `)
        document.write(`last name: ${this._secondname}<br/> `)
    }

    public constructor(firstnameparam: string, secondnameparam: string) {
        this.firstname = firstnameparam;
        this.lastname = secondnameparam;
        persom.numofperson++;

    }
}