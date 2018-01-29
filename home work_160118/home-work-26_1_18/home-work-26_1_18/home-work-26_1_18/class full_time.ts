class Full_Time extends Basic_Date {
    private _hour: number;
    private _minute: number;
    private _second: number;

    public set hour(num: number) {
        if (num >= 0 && num <= 24) {
            this._hour = num;
        }
    }
    public get hour(): number {
        return this._hour;
    }

    public set minute(num: number) {
        if (num >= 0 && num <= 60) {
            this._minute = num;
        }
    }
    public get minute(): number {
        return this._minute;
    }

    public set second(num: number) {
        if (num >= 0 && num <= 60) {
            this._second = num;
        }
    }
    public get second(): number {
        return this._second;
    }

    public toString(): void {
        super.toString()
        document.write(`hour: ${this._hour}<br/>`);
        document.write(`minute: ${this._minute}<br/>`);
        document.write(`second: ${this._second}<br/>`);
    }

}