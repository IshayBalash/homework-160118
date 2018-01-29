class Product {
    private _product_name: string;
    private _price: number;
    public _experion_date: Full_Time;


    public set product_name(str: string) {
        this._product_name = str;
    }
    public get product_name(): string {
        return this._product_name;
    }
    public set price(num: number) {
        if (num >0) {
            this._price = num;
        }
    }
    public get price(): number {
        return this._price;
    }

    public toString(): void {
        document.write(`product name:${this._product_name}<br/>`);
        document.write(`product price:${this._price}<br/>`);
        document.write(`product expersion time:<br/>`);
        this._experion_date.toString();
    }
}