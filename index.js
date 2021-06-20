function countdown(num) {
    let arr = [];
    while (num > 0) {
        num--
        arr.push(num)
    }
    return arr
}

function printAndReturn(num1, num2) {
    console.log(num1);
    return num2
}

function plusFirstValue(arr) {
    return arr[0] + arr.length;
}

function valGreaterThanSecond(arr) {
    return arr.filter(i => i > arr[1]);

}

function thisAndThatValue(num1, num2) {
    let arr = [];
    if (num1 === num2) {
        return "jinx!"
    } else {
        arr.push(num1, num2)
        return arr.length
    }

}

function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        return "too big!"
    } else if (arr[0] < arr.length) {
        return "too small!"
    } else {
        return "just right!"
    }
}

function fahrenheightToCelsius(fdegrees) {
    return (fdegrees - 32) * 5 / 9
}

function celsiusToFahrenheight(cdegrees) {
    return (cdegrees * 9 / 5) + 32
}