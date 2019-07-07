(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        return !this.toString().startsWith(str) ? str + this.toString() : this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        return !this.toString().endsWith(str) ? this.toString() + str : this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.toString().localeCompare("") === 0;
    };

    String.prototype.truncate = function (n) {
        if (n > 3) {
            if (this.toString().length > n) {
                let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
                return lastIndex != -1 ? this.toString().substr(0, lastIndex) + "..." : this.toString().substr(0, n - 3) + "...";
            } else {
                return this.toString();
            }
        } else {
            return ".".repeat(n);
        }
    };

    String["format"] = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            let index = string.indexOf("{" + i + "}");
            while (index !== -1) {
                string = string.replace("{" + i + "}", params[i]);
                index = string.indexOf("{" + i + "}");
            }
        }
        return string;
    }
})();