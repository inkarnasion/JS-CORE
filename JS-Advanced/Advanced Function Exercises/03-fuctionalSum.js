function add(num) {
    let sum = num;

    const calc = num2 => {
        sum += num2;
        return calc;

    };

    calc.toString = () => sum;
    return calc;
}

console.log(add(8)(1).toString());