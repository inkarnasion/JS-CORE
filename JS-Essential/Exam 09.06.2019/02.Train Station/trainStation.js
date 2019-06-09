function trainStation(capacity, passengers) {
    let wagonCapacity = Number(capacity);
    let wagons = [];
    let firstPassengers = 0;

    for (const element of passengers) {
        let passengersToEnter = Number(element);

        if (passengersToEnter === wagonCapacity) {
            wagons.push(passengersToEnter);
        } else {
            if (passengersToEnter < wagonCapacity) {
                if (firstPassengers > 0) {
                    let availableSeats = wagonCapacity - passengersToEnter;
                    if (firstPassengers >= availableSeats) {
                        wagons.push(passengersToEnter + availableSeats);
                        firstPassengers -= availableSeats;
                    } else {
                        wagons.push(passengersToEnter + firstPassengers);
                        firstPassengers = 0;
                    }
                } else {
                    wagons.push(passengersToEnter);
                }
            } else {
                wagons.push(wagonCapacity);
                firstPassengers += passengersToEnter - wagonCapacity;
            }
        }
    }

    console.log(wagons);
    if (firstPassengers <= 0) {
        console.log('All passengers aboard');
    } else {
        console.log(`Could not fit ${firstPassengers} passengers`);
    }
}

trainStation(10, [9, 39, 1, 0, 0]);

trainStation(6, [5, 15, 2]);