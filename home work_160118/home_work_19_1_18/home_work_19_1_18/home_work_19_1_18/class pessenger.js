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
var pessenger = (function (_super) {
    __extends(pessenger, _super);
    function pessenger(firstnameparam, secondnameparam, passportnumberparam) {
        var _this = _super.call(this, firstnameparam, secondnameparam) || this;
        _this.passportnumber = passportnumberparam;
        return _this;
    }
    Object.defineProperty(pessenger.prototype, "passportnumber", {
        get: function () {
            return this._passportnumber;
        },
        set: function (passportnumber) {
            this._passportnumber = passportnumber;
        },
        enumerable: true,
        configurable: true
    });
    pessenger.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("passenger ");
        document.write("passport number: " + this._passportnumber + "<br/>");
    };
    return pessenger;
}(persom));
//# sourceMappingURL=class pessenger.js.map