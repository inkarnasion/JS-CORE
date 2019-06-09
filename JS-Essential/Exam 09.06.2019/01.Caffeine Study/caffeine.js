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

// let morningCupOfCoffee = 1.5 * 40;
// let lunchCocaCola = 2.5 * 8;
// let brunchTeaCups = 3.5 * 20;
// let totalFiveDaysEnergyDrinks = 5 * 30;
//
//
// let morningCaffeine = 3 * morningCupOfCoffee;
// let lunchCaffeine = 2 * lunchCocaCola;
// let brunchCaffeine = 3 * brunchTeaCups;
// let dayCaffeine = morningCaffeine + lunchCaffeine + brunchCaffeine;
//
// let result = 0;
//
// for (let i = 1; i <= Number(input); i++) {
//     result += dayCaffeine;
//
//     if (i % 5 === 0) {
//         result += 3 * totalFiveDaysEnergyDrinks;
//     } else if (i % 9 === 0) {
//         result += 4 * lunchCocaCola + 2 * totalFiveDaysEnergyDrinks;
//     }
// }