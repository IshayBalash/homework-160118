var persom = (function () {
    function persom(firstnameparam, secondnameparam) {
        this.firstname = firstnameparam;
        this.lastname = secondnameparam;
        persom.numofperson++;
    }
    Object.defineProperty(persom, "numofpepole", {
        get: function () {
            return persom.numofperson;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(persom.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (name) {
            this._firstname = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(persom.prototype, "lastname", {
        get: function () {
            return this._secondname;
        },
        set: function (name) {
            this._secondname = name;
        },
        enumerable: true,
        configurable: true
    });
    persom.prototype.print = function () {
        document.write("first name: " + this._firstname + "<br/> ");
        document.write("last name: " + this._secondname + "<br/> ");
    };
    return persom;
}());
persom.numofperson = 0;
//# sourceMappingURL=class person.js.map