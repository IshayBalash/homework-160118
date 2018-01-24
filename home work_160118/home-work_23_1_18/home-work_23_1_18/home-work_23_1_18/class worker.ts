class worker extends Person {
    private _salery: number;
    public set salery(num: number) {
        if (num >= 0 && num <= 120) {
            this._salery = num
        }
        else {
            alert("age no good")
        }
    }
    public get salery(): number {
        return this._salery
    }

    public printinfo(): void {
        super.printinfo();
        document.write("the person is a worker<br/>");
        document.write(`the worker salery is: ${this._salery}<br/>`)
    }

    public constructor(fullnameparam: string = "moshe", ageparam: number = 22, idparam: string = "123456789", ismaleparam: boolean = true) {
        super()
    }
}