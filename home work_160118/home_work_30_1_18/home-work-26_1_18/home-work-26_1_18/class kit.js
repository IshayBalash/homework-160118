var Kit = (function () {
    function Kit() {
    }
    Object.defineProperty(Kit.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kit.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (num) {
            this._price = num;
        },
        enumerable: true,
        configurable: true
    });
    ////////////////////////////////////////////////
    Kit.prototype.fly = function (speed) {
        document.write("the kit is flying at: " + speed + " mph<br/>");
    };
    Kit.prototype.land = function () {
        var num = Math.round(Math.random() * (1 - 0) + 0);
        if (num == 0) {
            return false;
        }
        else if (num == 1) {
            return true;
        }
    };
    return Kit;
}());
//# sourceMappingURL=class kit.js.map