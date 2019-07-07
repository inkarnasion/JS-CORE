function constructionCrew(worker) {
    if (worker.dizziness) {
        let addAmount = worker.weight * worker.experience * 0.1;
        worker.levelOfHydrated += addAmount;
        worker.dizziness = false;
    }

    return worker;
}