document.write(`sum of topping before order is: ${Pizza.sumoftopping}<br/>`);
for (let i: number = 1; i <= 5; i++) {
    let pizza = new Pizza();
    document.write(`_________pizza number ${i}________<br/>`);
    pizza.printinfo();
    document.write("<br/>");
}
document.write("<br/>");
document.write(`sum of topping after order is: ${Pizza.sumoftopping}<br/>`);





