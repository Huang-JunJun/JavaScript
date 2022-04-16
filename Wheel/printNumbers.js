function printNumbers(from, to) {
    let current = from;

    let timeId = setInterval(function() {
        console.log(current);

        if (current === to) {
            clearInterval(timeId)
        }
        current++
    }, 1000)
}

function printNumbers2(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);

        if (current < to) {
            setTimeout(go, 1000)
        }
        current++
    }, 1000)
}

printNumbers2(1, 10)