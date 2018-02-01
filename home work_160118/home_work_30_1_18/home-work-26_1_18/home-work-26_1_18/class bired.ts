class Bired implements Ifly {
private _kind: string;
    public set kind(str: string) {
        this._kind = str
    }
    public get kind(): string {
        return this._kind
    }
    private _age: number;
    public set age(num: number) {
        this._age = num
    }
    public get age(): number {
        return this._age
    }
    private _color: string;
    public set color(str: string) {
        this._color = str
    }
    public get color(): string {
        return this._color
    }
    ///////////////////////////////////
    public fly(speed: number): void {
        document.write(`the bired is flying at: ${speed} mph<br/>`);
    }
    public land(): boolean {
        let num: number = Math.round(Math.random() * (1 - 0) + 0)
        if (num == 0) {
            return false;
        }
        else if (num == 1) {
            return true
        }



    }
    }