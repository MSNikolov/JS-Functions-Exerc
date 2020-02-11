function walk (steps, footprint, speed){
    let distance = steps*footprint;
    let rests = Math.floor(distance / 500)*60;
    let kms = distance/1000;
    let timeToWalk = kms/speed*3600 + rests;
    let totalMinutes = Math.floor( timeToWalk / 60);
    let totalSeconds = Math.round(timeToWalk % 60);
    let totalHours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    let hoursResult;
    if (totalHours < 10){
        hoursResult = `0${totalHours}`
    }
    else{
        hoursResult = totalHours;
    }
    let minutesResult;
    if (minutes < 10){
        minutesResult = `0${minutes}`
    }
    else{
        minutesResult = minutes;
    }
    let secondsResult;
    if (totalSeconds < 10){
        secondsResult = `0${totalSeconds}`
    }
    else{
        secondsResult = totalSeconds
    }
    return `${hoursResult}:${minutesResult}:${secondsResult}`
}

console.log(walk(2564, 0.70, 5.5))