var AirPlaine = (function () {
    function AirPlaine() {
    }
    Object.defineProperty(AirPlaine.prototype, "pilotname", {
        get: function () {
            return this._pilotname;
        },
        set: function (str) {
            this._pilotname = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaine.prototype, "compenyname", {
        get: function () {
            return this._compenyname;
        },
        set: function (str) {
            this._compenyname = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AirPlaine.prototype, "dest", {
        get: function () {
            return this._dest;
        },
        set: function (str) {
            this._dest = str;
        },
        enumerable: true,
        configurable: true
    });
    /////////////////////////////////////
    ////////////////////////////////////////////////
    AirPlaine.prototype.fly = function (speed) {
        document.write("the airplaine is flying at: " + speed + " mph<br/>");
    };
    AirPlaine.prototype.land = function () {
        var num = Math.round(Math.random() * (1 - 0) + 0);
        if (num == 0) {
            return false;
        }
        else if (num == 1) {
            return true;
        }
    };
    return AirPlaine;
}());
//# sourceMappingURL=class airplain.js.map