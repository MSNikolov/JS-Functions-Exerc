function calc(x){
    let y = x.toString();
    let z = true;
    let sum = Number(y[0]);
    for (i = 1; i < y.length; i++){
        if (y[i] != y[0]){
            z = false;
        }
        sum += Number(y[i]);
    }
    return (z + "\n" + sum);
}

console.log(calc(1234))