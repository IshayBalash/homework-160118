var Basic_Date = (function () {
    function Basic_Date() {
    }
    Object.defineProperty(Basic_Date.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (num) {
            if (num >= 1 && num <= 31) {
                this._day = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Basic_Date.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (num) {
            if (num >= 1 && num <= 12) {
                this._month = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Basic_Date.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (num) {
            if (num >= 2020 && num <= 2050) {
                this._year = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Basic_Date.prototype.toString = function () {
        document.write("year: " + this._year + "<br/>");
        document.write("month: " + this._month + "<br/>");
        document.write("day: " + this._year + "<br/>");
    };
    return Basic_Date;
}());
//# sourceMappingURL=class basic_date.js.map