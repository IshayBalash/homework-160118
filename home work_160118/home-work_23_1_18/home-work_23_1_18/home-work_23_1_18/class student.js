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
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(fullnameparam, ageparam, idparam, ismaleparam) {
        if (fullnameparam === void 0) { fullnameparam = "moshe"; }
        if (ageparam === void 0) { ageparam = 22; }
        if (idparam === void 0) { idparam = "123456789"; }
        if (ismaleparam === void 0) { ismaleparam = true; }
        return _super.call(this) || this;
    }
    Object.defineProperty(Student.prototype, "place_of_study", {
        get: function () {
            return this._place_of_study;
        },
        set: function (str) {
            this._place_of_study = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (str) {
            this._subject = str;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.printinfo = function () {
        _super.prototype.printinfo.call(this);
        document.write("the person is a student<br/>");
        document.write("the student studies in: " + this._place_of_study + "<br/>");
        document.write("the student studies: " + this._subject + "<br/>");
    };
    return Student;
}(Person));
//# sourceMappingURL=class student.js.map