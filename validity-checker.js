function check (params){
    function valid (a, b, c, d){
        if (Math.sqrt((a-c)*(a-c)+(b-d)*(b-d)) % 1 == 0){
            return "valid";
        }
        else{
            return "invalid";
        }
    }

    let x1 = params[0];
    let y1 = params[1];
    let x2 = params[2];
    let y2 = params[3];

    return `{${x1}, ${y1}} to {0, 0} is ${valid(x1, y1, 0, 0)}` + "\n" +
        `{${x2}, ${y2}} to {0, 0} is ${valid(x2, y2, 0, 0)}` + "\n" +
        `{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid(x1, y1, x2, y2)}`
}

console.log(check([2, 1, 1, 1]))