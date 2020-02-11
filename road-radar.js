function radar (params){
    let speed = params[0]
    let area = params[1]

    const limits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    }

    if (speed <= limits[area]){
        return ""
    }

    else{
        if (speed - limits[area] <= 20){
            return "speeding"
        }
        else if (speed - limits[area] <= 40){
            return "excessive speeding"
        }
        else{
            return "reckless driving"
        }
    }
}

console.log(radar([200, 'motorway']))