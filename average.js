module.exports = function average(array) {
    if (Array.isArray(array)) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    } else {
        throw new Error('Parameter must be an array.');
    }
};
