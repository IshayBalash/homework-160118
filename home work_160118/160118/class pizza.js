var Pizza = (function () {
    /////////////////////////////////////////////////////////////////////
    function Pizza(diameterparam, slicesparam, toppingparam) {
        if (diameterparam == undefined) {
            var min = 10;
            var max = 50;
            this.Diameter = Math.round(Math.random() * (max - min) + min);
        }
        else {
            this.Diameter = diameterparam;
        }
        if (slicesparam == undefined) {
            var min = 1;
            var max = 8;
            this.Slices = Math.round(Math.random() * (max - min) + min);
        }
        else {
            this.Slices = slicesparam;
        }
        if (toppingparam == undefined) {
            var min = 0;
            var max = 5;
            this.Topping = Math.round(Math.random() * (max - min) + min);
        }
        else {
            this.Topping = toppingparam;
        }
        Pizza._SumOfTopping += this._Toppings;
    }
    Object.defineProperty(Pizza, "sumoftopping", {
        //////////////////////////////////////////////////////
        get: function () {
            return Pizza._SumOfTopping;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "Diameter", {
        get: function () {
            return this._Diameter;
        },
        set: function (diameter) {
            if (diameter >= 10 && diameter <= 50) {
                this._Diameter = diameter;
            }
            else {
                alert("the pizza diameter is wrong");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "Slices", {
        get: function () {
            return this._Slicees;
        },
        set: function (slices) {
            if (slices >= 1 && slices <= 8) {
                this._Slicees = slices;
            }
            else {
                alert("the pizza slices number is wrong");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "Topping", {
        get: function () {
            return this._Toppings;
        },
        set: function (topping) {
            if (topping >= 0 && topping <= 5) {
                this._Toppings = topping;
            }
            else {
                alert("the pizza topping number  is wrong");
            }
        },
        enumerable: true,
        configurable: true
    });
    //////////////////////////////////////////////////////////
    Pizza.prototype.IsBasicPizza = function () {
        if (this._Toppings > 0) {
            return false;
        }
        return true;
    };
    Pizza.prototype.printinfo = function () {
        document.write("the pizza diameter is: " + this._Diameter + "<br/>");
        document.write("the pizza has " + this._Slicees + " slices <br/>");
        document.write("the pizza has " + this._Toppings + " toppings <br/>");
        var isbasic = this.IsBasicPizza();
        if (isbasic == false) {
            document.write("the pizza is not basic ");
        }
        else {
            document.write("the pizza is basic");
        }
    };
    return Pizza;
}());
Pizza._SumOfTopping = 0;
//# sourceMappingURL=class pizza.js.map