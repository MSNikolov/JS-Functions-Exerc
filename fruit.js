function fruit (fr, weight, price){
    let total = weight*price/1000;
    return `I need $${total.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fr}.`
}

console.log(fruit('orange', 2500, 1.80))