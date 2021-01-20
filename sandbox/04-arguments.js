let test = function () {
    console.log(arguments)
    // console.log(a, b, c, d, e)
}

console.log(test)

// test(10, 22, 33, 44, 55, 34545, 2342354, 13412423)

function a() { } console.log(a.prototype === a.__proto__); 