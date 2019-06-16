function solve(array, method) {
    if (method === "asc") {
        return array.sort((a, b) => {
            return a - b
        });
    } else {
        return array.sort((a, b) => {
            return b - a
        });
    }
}

console.log(solve([3, 1, 2, 10], 'asc'));