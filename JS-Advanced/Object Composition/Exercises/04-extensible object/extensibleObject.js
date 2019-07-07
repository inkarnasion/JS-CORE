function extensibleObject() {
    let myObj = {
        __proto__: {},
        extend: function (input) {
            for (let key of Object.keys(input)) {
                if (typeof input[key] === 'function') {
                    console.log(typeof input[key]);
                    Object.getPrototypeOf(this)[key] = input[key];
                } else {
                    console.log(typeof input[key]);
                    this[key] = input[key];
                }
            }
        }
    };

    return myObj;
}