let arr: Array<Ifly> = new Array<Ifly>(10);
for (let i: number = 0; i < arr.length; i++) {
    arr[i] = createIfly(arr)
}
for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] instanceof AirPlaine) {
        document.write("AIR PLAINE<br/>")
    }
    else if (arr[i] instanceof Bired) {
        document.write("BIRED<br/>")
    }
    else if (arr[i] instanceof Kit) {
        document.write("Kit<br/>")
    }
    arr[i].fly(makerandomnumberbetwin10100());
    let land: boolean = arr[i].land();
    if (land) {
        document.write("landed<br/>-----------<br/>");
    }
    else {
        document.write("did not land<br/>-----------<br/>")
    }
}

///////////////////////////////////////////////////////////////
function createIfly(arr: Array<Ifly>): Ifly {
    let num: number = makerandomnumberbetwin02();
    switch (num) {
        case 0:
            return new Bired();
        case (1):
            return new AirPlaine();
        case (2):
            return new Kit();
    }
}
////////////////////////////////////////////
function makerandomnumberbetwin02(): number {
    return Math.round(Math.random()*(2-0)+0)
}
function makerandomnumberbetwin10100(): number {
    return Math.round(Math.random() * (100 - 10) + 10)
}



