var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Full_Time = (function (_super) {
    __extends(Full_Time, _super);
    function Full_Time() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Full_Time.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (num) {
            if (num >= 0 && num <= 24) {
                this._hour = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Full_Time.prototype, "minute", {
        get: function () {
            return this._minute;
        },
        set: function (num) {
            if (num >= 0 && num <= 60) {
                this._minute = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Full_Time.prototype, "second", {
        get: function () {
            return this._second;
        },
        set: function (num) {
            if (num >= 0 && num <= 60) {
                this._second = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Full_Time.prototype.toString = function () {
        _super.prototype.toString.call(this);
        document.write("hour: " + this._hour + "<br/>");
        document.write("minute: " + this._minute + "<br/>");
        document.write("second: " + this._second + "<br/>");
    };
    return Full_Time;
}(Basic_Date));
//# sourceMappingURL=class full_time.js.map