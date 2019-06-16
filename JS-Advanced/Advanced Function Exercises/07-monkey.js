function monkeyPatcher(action) {
    let obj;
    let that = this;
    obj = (() => {
        function upvote() {
            that.upvotes++
        }

        const downvote = () => {
            that.downvotes++
        };

        let score;
        score = () => {
            let obfuscated = that.upvotes + that.downvotes > 50;
            let votesToAdd = Math.ceil(0.25 * Math.max(that.upvotes, that.downvotes));
            let rating;
            rating = that.upvotes / (that.upvotes + that.downvotes) > 0.66 ? "hot" : rating = (that.upvotes > 100 || that.downvotes > 100) && that.upvotes >= that.downvotes ? "controversial" : rating = that.downvotes > that.upvotes ? "unpopular" : "new";

            if (that.upvotes + that.downvotes < 10) {
                rating = "new";
            }

            return obfuscated ? [that.upvotes + votesToAdd, that.downvotes + votesToAdd, that.upvotes - that.downvotes, rating] : [that.upvotes, that.downvotes, that.upvotes - that.downvotes, rating];
        };

        return {upvote, downvote, score};
    })();

    return obj[action]();
}