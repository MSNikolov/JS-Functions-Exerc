function gcd (x, y){
    let d = 1;
    for (i=1; i <= Math.min(x, y); i++){
        if (x % i === 0 && y % i === 0)
        {
            d = i;
        }
    }
    return d;
}
console.log(gcd(2154, 458))