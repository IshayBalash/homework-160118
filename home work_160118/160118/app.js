document.write("sum of topping before order is: " + Pizza.sumoftopping + "<br/>");
for (var i = 1; i <= 5; i++) {
    var pizza = new Pizza();
    document.write("_________pizza number " + i + "________<br/>");
    pizza.printinfo();
    document.write("<br/>");
}
document.write("<br/>");
document.write("sum of topping after order is: " + Pizza.sumoftopping + "<br/>");
//# sourceMappingURL=app.js.map