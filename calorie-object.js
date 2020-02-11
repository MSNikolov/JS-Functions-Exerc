function calories (params){
    let products = [params.length/2]
    let y = 0;
    for (i = 0; i < params.length; i+=2){
        products[y] = `${params[i]}: ${params[i+1]}`
        y++;
    }
    return "{ " + products.join(", ") + " }"
}

console.log(calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']))