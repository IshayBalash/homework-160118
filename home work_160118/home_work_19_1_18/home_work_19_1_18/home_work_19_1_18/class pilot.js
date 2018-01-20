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
var pilot = (function (_super) {
    __extends(pilot, _super);
    function pilot(firstnameparam, secondnameparam, numberoflicenceparam, seniorityparam) {
        var _this = _super.call(this, firstnameparam, secondnameparam) || this;
        _this.numberoflicence = numberoflicenceparam;
        _this.seniority = seniorityparam;
        return _this;
    }
    Object.defineProperty(pilot.prototype, "numberoflicence", {
        get: function () {
            return this._numberlicence;
        },
        set: function (number) {
            this._numberlicence = number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(pilot.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (number) {
            this._seniority = number;
        },
        enumerable: true,
        configurable: true
    });
    pilot.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("job: pilot<br/>");
        document.write("number of licence: " + this._numberlicence + "<br/>");
        document.write("seniority: " + this._seniority + "<br/>");
    };
    return pilot;
}(persom));
//# sourceMappingURL=class pilot.js.map