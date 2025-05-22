function grumps () {
    console.log("ugh...you again...")
    console.log("for the last time...")
    console.log("LEAVE ME ALONE!!!")
}

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// Arguments

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return "buta vagy";
    }
    return x + y;
}





// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

