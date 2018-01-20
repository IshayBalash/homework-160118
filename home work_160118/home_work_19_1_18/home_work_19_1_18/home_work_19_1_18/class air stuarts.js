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
var airstuarts = (function (_super) {
    __extends(airstuarts, _super);
    function airstuarts(firstnameparam, secondnameparam, originparam, seniorityparam, classparam) {
        var _this = _super.call(this, firstnameparam, secondnameparam) || this;
        _this.origin = originparam;
        _this.seniority = seniorityparam;
        _this.class = classparam;
        return _this;
    }
    Object.defineProperty(airstuarts.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (str) {
            this._origin = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(airstuarts.prototype, "class", {
        get: function () {
            return this._class;
        },
        set: function (number) {
            this._class = number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(airstuarts.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (number) {
            this._seniority = number;
        },
        enumerable: true,
        configurable: true
    });
    airstuarts.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("job: air_stuarts<br/>");
        document.write("origin: " + this._origin + "<br/>");
        document.write("seniority: " + this._seniority + "<br/>");
        document.write("class: " + this._class + "<br/>");
    };
    return airstuarts;
}(persom));
//# sourceMappingURL=class air stuarts.js.map