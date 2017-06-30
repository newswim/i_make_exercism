class Pangram {
    constructor (input) {
        this.str = input
    }

    isPangram() {
        // check that this.str contains ever letter of the alphabet

        let testString = this.str.toLowerCase().replace(/[^a-z]/g, "")

        let testSet = new Set(testString)

        return testSet.size === 26
    }

}

module.exports = Pangram;
