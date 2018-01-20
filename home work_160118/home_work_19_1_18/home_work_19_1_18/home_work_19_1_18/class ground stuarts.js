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
var groundstuarts = (function (_super) {
    __extends(groundstuarts, _super);
    function groundstuarts(firstnameparam, secondnameparam, originparam, seniorityparam, groundjobparam) {
        var _this = _super.call(this, firstnameparam, secondnameparam) || this;
        _this.origin = originparam;
        _this.seniority = seniorityparam;
        _this.groundjob = groundjobparam;
        return _this;
    }
    Object.defineProperty(groundstuarts.prototype, "origin", {
        get: function () {
            return this._origin;
        },
        set: function (str) {
            this._origin = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(groundstuarts.prototype, "groundjob", {
        get: function () {
            return this._groundjob;
        },
        set: function (number) {
            this._groundjob = number;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(groundstuarts.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (number) {
            this._seniority = number;
        },
        enumerable: true,
        configurable: true
    });
    groundstuarts.prototype.print = function () {
        _super.prototype.print.call(this);
        document.write("job: ground stuarts<br/>");
        document.write("origin: " + this._origin + "<br/>");
        document.write("seniority: " + this._seniority + "<br/>");
        document.write("ground job: " + this._groundjob + "<br/>");
    };
    return groundstuarts;
}(persom));
//# sourceMappingURL=class ground stuarts.js.map