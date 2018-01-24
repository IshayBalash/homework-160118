class Person {
    /////////////////////////////////////////////////
    private _full_name: string;
    public set full_name(str: string) {
        this._full_name = str
    }
    public get full_name(): string {
        return this._full_name
    }

    private _age: number;
    public set age(num: number) {
        if (num >= 0 && num <= 120) {
            this._age = num
        }
        else {
            alert("age no good")
        }
    }
    public get age(): number {
        return this._age
    }

    private _id: string;
    public set id(str: string) {
        if (str.length == 9 && Number(str) != NaN) {
            this._id = str
        }
        else {
            alert("id no good")
        }
    }
    public get id(): string {
        return this._id
    }

    private _ismale: boolean;
    public set is_male(bool: boolean) {
        this._ismale = bool
    }
    public get is_male(): boolean {
        return this.is_male
    }
    ///////////////////////////////////////////
    public printinfo(): void {
        document.write(`person name is: ${this._full_name}<br/>`);
        document.write(`person age is: ${this._age}<br/>`);
        document.write(`person id is: ${this._id}<br/>`);
        document.write(`person is male: ${this._ismale}<br/>`);
    }

    public constructor(fullnameparam: string = "moshe", ageparam: number = 22, idparam: string = "123456789", ismaleparam: boolean = true) {
        this.full_name = fullnameparam;
        this.age = ageparam;
        this.id = idparam;
        this.is_male = ismaleparam;
    }

}