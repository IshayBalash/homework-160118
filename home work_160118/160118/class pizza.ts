class Pizza {
    private _Diameter: number;
    private _Slicees: number;
    private _Toppings: number;
    private static _SumOfTopping: number = 0;
    //////////////////////////////////////////////////////
    public static get sumoftopping(): number {
        return Pizza._SumOfTopping;
    }

    public set Diameter(diameter: number) {
        if (diameter >= 10 && diameter <= 50) {
            this._Diameter = diameter;
        }
        else {
            alert("the pizza diameter is wrong")
        }
    }

    public get Diameter(): number {
        return this._Diameter
    }

    public set Slices(slices: number) {
        if (slices >= 1 && slices <= 8) {
            this._Slicees = slices;
        }
        else {
            alert("the pizza slices number is wrong")
        }
    }

    public get Slices(): number {
        return this._Slicees
    }

    public set Topping(topping: number) {
        if (topping >= 0 && topping <= 5) {
            this._Toppings = topping;
        }
        else {
            alert("the pizza topping number  is wrong")
        }
    }

    public get Topping(): number {
        return this._Toppings
    }
    //////////////////////////////////////////////////////////
    public IsBasicPizza(): boolean {
        if (this._Toppings > 0) {
            return false;
        }
        return true
    }

    public printinfo(): void {
        document.write(`the pizza diameter is: ${this._Diameter}<br/>`)
        document.write(`the pizza has ${this._Slicees} slices <br/>`)
        document.write(`the pizza has ${this._Toppings} toppings <br/>`)
        let isbasic: boolean = this.IsBasicPizza();
        if (isbasic == false) {
            document.write("the pizza is not basic ");
        }
        else {
            document.write("the pizza is basic");
        }
    }
    /////////////////////////////////////////////////////////////////////
    public constructor(diameterparam?: number, slicesparam?: number, toppingparam?: number) {
        if (diameterparam == undefined) {
            let min: number = 10;
            let max: number = 50;
            this.Diameter = Math.round(Math.random() * (max - min) + min);
        }
        else {
            this.Diameter = diameterparam;
        }
        if (slicesparam == undefined) {
            let min: number = 1;
            let max: number = 8;
            this.Slices = Math.round(Math.random() * (max - min) + min);
        }
        else {
            this.Slices = slicesparam;
        }
        if (toppingparam == undefined) {
            let min: number = 0;
            let max: number = 5;
            this.Topping = Math.round(Math.random() * (max - min) + min);
        }
        else {
            this.Topping = toppingparam;
        }
        Pizza._SumOfTopping += this._Toppings;

    }
}






