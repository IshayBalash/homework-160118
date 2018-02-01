class Kit implements Ifly {
private _color: string;
    public set color(str: string) {
        this._color = str
    }
    public get color(): string {
        return this._color
    }

    private _price: number;
    public set price(num: number) {
        this._price = num
    }
    public get price(): number {
        return this._price
    }
    ////////////////////////////////////////////////
    public fly(speed: number): void {
        document.write(`the kit is flying at: ${speed} mph<br/>`);
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