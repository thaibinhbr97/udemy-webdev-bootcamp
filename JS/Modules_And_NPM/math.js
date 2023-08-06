const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;


// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;

exports.square = square;
exports.PI = PI;

// =========================
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;

