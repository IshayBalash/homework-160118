var Bired = (function () {
    function Bired() {
    }
    Object.defineProperty(Bired.prototype, "kind", {
        get: function () {
            return this._kind;
        },
        set: function (str) {
            this._kind = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bired.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (num) {
            this._age = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bired.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (str) {
            this._color = str;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////////////////////////
    Bired.prototype.fly = function (speed) {
        document.write("the bired is flying at: " + speed + " mph<br/>");
    };
    Bired.prototype.land = function () {
        var num = Math.round(Math.random() * (1 - 0) + 0);
        if (num == 0) {
            return false;
        }
        else if (num == 1) {
            return true;
        }
    };
    return Bired;
}());
//# sourceMappingURL=class bired.js.map