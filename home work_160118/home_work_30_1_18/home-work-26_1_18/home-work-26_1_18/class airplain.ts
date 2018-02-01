class AirPlaine implements Ifly {
    
 private _pilotname: string;
public set pilotname(str: string) {
        this._pilotname = str;
    }
public get pilotname(): string {
        return this._pilotname;
  }

private _compenyname: string;
    public set compenyname(str: string) {
        this._compenyname = str;
    }
    public get compenyname(): string {
        return this._compenyname;
    }
private _dest: string;
public set dest(str: string) {
    this._dest = str
    }
public get dest(): string {
    return this._dest
}
/////////////////////////////////////



////////////////////////////////////////////////
    public fly(speed: number): void {
        document.write(`the airplaine is flying at: ${speed} mph<br/>`);
    }
    public land(): boolean{        
      let num: number = Math.round(Math.random() * (1 - 0) + 0)
      if (num == 0) {
         return false;
          }
          else if (num == 1) {
            return true
           }
        


    }
}