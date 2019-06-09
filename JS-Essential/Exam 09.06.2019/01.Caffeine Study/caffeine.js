function solve(input) {

let mornningCupOfDrinks = 3 * (1.5 * 40), lunchBottleCocaCola = 2 * (2.5 * 8), brunchCupsOfTea = 3 * (3.5 * 20),
    totalFiveDaysEnergyDrinks = 5 * 30, totalCoffeine = mornningCupOfDrinks + lunchBottleCocaCola + brunchCupsOfTea,
    totalResult = 0;

    for (let i = 1; i <= Number(input) ; i++) {
        totalResult += totalCoffeine;
        if (i %5 === 0){
            totalResult += 3 * totalFiveDaysEnergyDrinks;
        } else if (i % 9 === 0){
                totalResult += 4*(2.5 * 8) + 2 * totalFiveDaysEnergyDrinks;
        }
    }


    console.log(`${totalResult} milligrams of caffeine were consumed`);

}
solve(5);
solve(8);

