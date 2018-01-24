var Cinema = (function () {
    function Cinema(cinemanameparam, moviepricerparam) {
        if (cinemanameparam === void 0) { cinemanameparam = "yes planet"; }
        if (moviepricerparam === void 0) { moviepricerparam = 40; }
        this.cinema_name = cinemanameparam;
        this.movie_price = moviepricerparam;
        this._student_discount = Math.round(Math.random() * (20 - 10) + 10);
        this._teacher_discount = Math.round(Math.random() * (10 - 5) + 5);
    }
    Object.defineProperty(Cinema.prototype, "cinema_name", {
        get: function () {
            return this._cinema_name;
        },
        set: function (str) {
            this._cinema_name = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "movie_price", {
        get: function () {
            return this._movie_price;
        },
        set: function (num) {
            if (num >= 30 && num <= 200) {
                this._movie_price = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "student_discount", {
        get: function () {
            return this._student_discount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cinema.prototype, "teacher_discount", {
        get: function () {
            return this._teacher_discount;
        },
        enumerable: true,
        configurable: true
    });
    return Cinema;
}());
//# sourceMappingURL=class cinema.js.map