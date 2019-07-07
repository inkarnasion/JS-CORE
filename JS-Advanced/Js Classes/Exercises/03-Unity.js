class Rat{
    constructor(name){
        this.name = name;
        this._rats = [];
    }

    unite(otherRat){
        if (otherRat.name !== undefined) {
            this._rats.push(otherRat);
        } else {
            return;
        }
    }

    getRats(){
        return this._rats;
    }

    toString(){
        let res = `${this.name}\n`;
        for (const rat of rats) {
            res += `##${rat.name}\n`
        }
        return res;
    }
}