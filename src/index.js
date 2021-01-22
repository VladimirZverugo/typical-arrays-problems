exports.min = function min (array) {
    return (array && array.length) ? Math.min.apply(null, array) : 0
}
exports.max = function max (array) {
    return (array && array.length) ?  Math.max.apply(null, array)  : 0
};
exports.avg = function avg (array) {
    return (array && array.length) ? array.reduce((accumulator, number) => (accumulator) + (number)) / array.length : 0
};
