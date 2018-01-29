var Product = (function () {
    function Product() {
    }
    Object.defineProperty(Product.prototype, "product_name", {
        get: function () {
            return this._product_name;
        },
        set: function (str) {
            this._product_name = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (num) {
            if (num > 0) {
                this._price = num;
            }
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        document.write("product name:" + this._product_name + "<br/>");
        document.write("product price:" + this._price + "<br/>");
        document.write("product expersion time:<br/>");
        this._experion_date.toString();
    };
    return Product;
}());
//# sourceMappingURL=class product.js.map