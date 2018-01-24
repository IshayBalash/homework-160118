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
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(fullnameparam, ageparam, idparam, ismaleparam) {
        if (fullnameparam === void 0) { fullnameparam = "moshe"; }
        if (ageparam === void 0) { ageparam = 22; }
        if (idparam === void 0) { idparam = "123456789"; }
        if (ismaleparam === void 0) { ismaleparam = true; }
        return _super.call(this) || this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (str) {
            this._subject = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "seniority", {
        get: function () {
            return this._seniority;
        },
        set: function (str) {
            this._seniority = str;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.printinfo = function () {
        _super.prototype.printinfo.call(this);
        document.write("the person is a teacher<br/>");
        document.write("the teacher have been teaching for: " + this._seniority + "<br/>");
        document.write("the teacher teach: " + this._subject + "<br/>");
    };
    return Teacher;
}(Person));
//# sourceMappingURL=class teacher.js.map