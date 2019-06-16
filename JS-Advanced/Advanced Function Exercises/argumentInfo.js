function argumentInfo() {
    let args = argumentInfo.arguments;
    let objects = {};

    for (let item of args) {
        let type = typeof (item);
        if (objects.hasOwnProperty(type)) {
        } else {
            objects[type] = 0;
        }
        objects[type]++;

        console.log(`${type}: ${item}`);
    }

    for (const x of Object.keys(objects).sort((a, b) => {
        return objects[b] - objects[a];
    })) {
        console.log(`${x} = ${objects[x]}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });