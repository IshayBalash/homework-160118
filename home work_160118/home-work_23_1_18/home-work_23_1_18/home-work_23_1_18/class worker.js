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
var worker = (function (_super) {
    __extends(worker, _super);
    function worker(fullnameparam, ageparam, idparam, ismaleparam) {
        if (fullnameparam === void 0) { fullnameparam = "moshe"; }
        if (ageparam === void 0) { ageparam = 22; }
        if (idparam === void 0) { idparam = "123456789"; }
        if (ismaleparam === void 0) { ismaleparam = true; }
        return _super.call(this) || this;
    }
    Object.defineProperty(worker.prototype, "salery", {
        get: function () {
            return this._salery;
        },
        set: function (num) {
            if (num >= 0 && num <= 120) {
                this._salery = num;
            }
            else {
                alert("age no good");
            }
        },
        enumerable: true,
        configurable: true
    });
    worker.prototype.printinfo = function () {
        _super.prototype.printinfo.call(this);
        document.write("the person is a worker<br/>");
        document.write("the worker salery is: " + this._salery + "<br/>");
    };
    return worker;
}(Person));
//# sourceMappingURL=class worker.js.map