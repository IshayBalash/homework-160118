class Cinema {
    private _cinema_name: string;
    public set cinema_name(str: string) {
        this._cinema_name = str
    }
    public get cinema_name(): string {
        return this._cinema_name
    }
    private _movie_price: number;
    public set movie_price(num: number) {
        if (num >= 30 && num <= 200) {
            this._movie_price = num
        }
    }
    public get movie_price(): number {
        return this._movie_price
    }

    private _student_discount: number;
    public get student_discount(): number {
        return this._student_discount
    }
    private _teacher_discount: number;
    public get teacher_discount(): number {
        return this._teacher_discount
    }


    public constructor(cinemanameparam: string = "yes planet", moviepricerparam: number = 40) {
        this.cinema_name = cinemanameparam;
        this.movie_price = moviepricerparam;
        this._student_discount = Math.round(Math.random() * (20 - 10) + 10);
        this._teacher_discount = Math.round(Math.random() * (10 - 5) + 5);
    }

}