function spaceshipCrafting() {
    let titanium = Math.round(document.getElementById('titaniumCoreFound').value),
        aluminium = Math.round(document.getElementById('aluminiumCoreFound').value),
        magnesium = Math.round(document.getElementById('magnesiumCoreFound').value),
        carbon = Math.round(document.getElementById('carbonCoreFound').value),
        percents = Math.round(document.getElementById('lossesPercent').value) / 4 / 100;
    const titaniumBarPrice = 25, aluminiumBarPrice = 50, magnesiumBarPrice = 75, carbonBarPrice = 100;
    let titaniumBars = Math.round((titanium - (titanium * percents)) / titaniumBarPrice),
        aluminiumBars = Math.round((aluminium - (aluminium * percents)) / aluminiumBarPrice),
        magnesiumBars = Math.round((magnesium - (magnesium * percents)) / magnesiumBarPrice),
        carbonBars = Math.round((carbon - (carbon * percents)) / carbonBarPrice), undefinedShips = 0, nullMasters = 0,
        jsonCrew = 0, falseFleet = 0, done = 0;

    while (done === 0) {
        if (titaniumBars >= 7 && aluminiumBars >= 9 && magnesiumBars >= 7) {
            if (carbonBars >= 7) {
                undefinedShips += 1;

                titaniumBars -= 7;
                aluminiumBars -= 9;
                magnesiumBars -= 7;
                carbonBars -= 7;
            }
        }
        if (titaniumBars >= 5 && aluminiumBars >= 7 && magnesiumBars >= 7) {
            if (carbonBars >= 5) {
                nullMasters += 1;

                titaniumBars -= 5;
                aluminiumBars -= 7;
                magnesiumBars -= 7;
                carbonBars -= 5;
            }
        }
        if (titaniumBars >= 3 && aluminiumBars >= 5 && magnesiumBars >= 5) {
            if (carbonBars >= 2) {
                jsonCrew += 1;

                titaniumBars -= 3;
                aluminiumBars -= 5;
                magnesiumBars -= 5;
                carbonBars -= 2;
            }
        }
        if (titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3) {
            if (carbonBars >= 1) {
                falseFleet += 1;

                titaniumBars -= 2;
                aluminiumBars -= 2;
                magnesiumBars -= 3;
                carbonBars -= 1;
            }
        }
        if (titaniumBars < 2 || aluminiumBars < 2 || magnesiumBars < 3) {
            done = 1;
        } else if (carbonBars < 1) {
            done = 1;
        }
    }

    let shipsResult = '';

    if (undefinedShips <= 0) {
    } else {
        if (shipsResult.length > 0) {
            shipsResult += ', ';
        }
        shipsResult += `${undefinedShips} THE-UNDEFINED-SHIP`;
    }
    if (nullMasters <= 0) {
    } else {
        if (shipsResult.length > 0) {
            shipsResult += ', ';
        }
        shipsResult += `${nullMasters} NULL-MASTER`;
    }
    if (jsonCrew <= 0) {
    } else {
        if (shipsResult.length > 0) {
            shipsResult += ', ';
        }
        shipsResult += `${jsonCrew} JSON-CREW`;
    }
    if (falseFleet <= 0) {
    } else {
        if (shipsResult.length > 0) {
            shipsResult += ', ';
        }
        shipsResult += `${falseFleet} FALSE-FLEET`;
    }

    let barsResult = `${titaniumBars} titanium bars, ${aluminiumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`;

    document.querySelector('#availableBars > p').innerHTML = barsResult;
    document.querySelector('#builtSpaceships > p').innerHTML = shipsResult;
}