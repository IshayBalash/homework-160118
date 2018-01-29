 abstract class Basic_Date {
    private _day: number;
    private _month: number;
    private _year: number;

    public set day(num: number) {
        if (num >= 1 && num <= 31) {
            this._day = num;
        }
    }

    public get day(): number {
        return this._day;
    }

    public set month(num: number) {
        if (num >= 1 && num <= 12) {
            this._month = num
        }
    }

    public get month(): number {
        return this._month
    }
    public set year(num: number) {
        if (num >= 2020 && num <= 2050) {
            this._year = num
        }
    }
    public get year(): number {
        return this._year
    }

    public toString(): void {
        document.write(`year: ${this._year}<br/>`);
        document.write(`month: ${this._month}<br/>`);
        document.write(`day: ${this._year}<br/>`);
    }
}