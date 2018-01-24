var Person = (function () {
    function Person(fullnameparam, ageparam, idparam, ismaleparam) {
        if (fullnameparam === void 0) { fullnameparam = "moshe"; }
        if (ageparam === void 0) { ageparam = 22; }
        if (idparam === void 0) { idparam = "123456789"; }
        if (ismaleparam === void 0) { ismaleparam = true; }
        this.full_name = fullnameparam;
        this.age = ageparam;
        this.id = idparam;
        this.is_male = ismaleparam;
    }
    Object.defineProperty(Person.prototype, "full_name", {
        get: function () {
            return this._full_name;
        },
        set: function (str) {
            this._full_name = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (num) {
            if (num >= 0 && num <= 120) {
                this._age = num;
            }
            else {
                alert("age no good");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (str) {
            if (str.length == 9 && Number(str) != NaN) {
                this._id = str;
            }
            else {
                alert("id no good");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "is_male", {
        get: function () {
            return this.is_male;
        },
        set: function (bool) {
            this._ismale = bool;
        },
        enumerable: true,
        configurable: true
    });
    ///////////////////////////////////////////
    Person.prototype.printinfo = function () {
        document.write("person name is: " + this._full_name + "<br/>");
        document.write("person age is: " + this._age + "<br/>");
        document.write("person id is: " + this._id + "<br/>");
        document.write("person is male: " + this._ismale + "<br/>");
    };
    return Person;
}());
//# sourceMappingURL=class person.js.map