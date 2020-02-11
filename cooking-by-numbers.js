function cook (params){
    let num = Number(params[0]);
    let result = [5];
    for (i = 1; i < params.length; i++){
        switch (params[i]){
            case "chop": num /= 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num++; break;
            case "bake": num*=3;break;
            case "fillet": num *= 0.80; break;
        }
        result[i-1] = num
    }
    return result.join("\n")
}

console.log(cook(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']))