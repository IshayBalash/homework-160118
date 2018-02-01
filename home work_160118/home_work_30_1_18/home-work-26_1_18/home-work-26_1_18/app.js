var arr = new Array(10);
for (var i = 0; i < arr.length; i++) {
    arr[i] = createIfly(arr);
}
for (var i = 0; i < arr.length; i++) {
    if (arr[i] instanceof AirPlaine) {
        document.write("AIR PLAINE<br/>");
    }
    else if (arr[i] instanceof Bired) {
        document.write("BIRED<br/>");
    }
    else if (arr[i] instanceof Kit) {
        document.write("Kit<br/>");
    }
    arr[i].fly(makerandomnumberbetwin10100());
    var land = arr[i].land();
    if (land) {
        document.write("landed<br/>-----------<br/>");
    }
    else {
        document.write("did not land<br/>-----------<br/>");
    }
}
///////////////////////////////////////////////////////////////
function createIfly(arr) {
    var num = makerandomnumberbetwin02();
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
function makerandomnumberbetwin02() {
    return Math.round(Math.random() * (2 - 0) + 0);
}
function makerandomnumberbetwin10100() {
    return Math.round(Math.random() * (100 - 10) + 10);
}
//# sourceMappingURL=app.js.map