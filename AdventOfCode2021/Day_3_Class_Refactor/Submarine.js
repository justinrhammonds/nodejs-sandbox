class Submarine {
    constructor(diagnostics) {
        this._diagnostics = diagnostics;
        this.gamma = '';
        this.epsilon = '';
        this.co2Scrubber = this.calculateCo2ScrubberRating();
        this.oxygenGenerator = this.calculateOxygenGeneratorRating();

        this.calculateGammaEpsilonRatings();
    }

    calculateGammaEpsilonRatings() {
        for (let i = 0; i < this._diagnostics[0].length; i++) {
            let group = [];
            for (let I = 0; I < this._diagnostics.length; I++) {
                group.push(this._diagnostics[I][i]);
            }

            // build the two new bit strings
            if (group.filter(g => g == 0).length > group.filter(g => g == 1).length) {
                this.gamma += '0';
                this.epsilon += '1';
            } else {
                this.gamma += '1';
                this.epsilon += '0';
            }
        }
    }

    calculateCo2ScrubberRating() {
        let scrubberDiagnostics = this._diagnostics;
        for (let i = 0; i < scrubberDiagnostics[0].length; i++) {
    
            if (scrubberDiagnostics.length == 1) return scrubberDiagnostics[0];

            let group = [];
            for (let I = 0; I < scrubberDiagnostics.length; I++) {
                group.push(scrubberDiagnostics[I][i]);
            }

            // keep most common
            if (group.filter(g => g == 0).length > group.filter(g => g == 1).length) {
                scrubberDiagnostics = scrubberDiagnostics.filter(bit => bit[i] == 0);
            } else {
                scrubberDiagnostics = scrubberDiagnostics.filter(bit => bit[i] == 1); // if values equal, keep the 1s
            }
        }
        return scrubberDiagnostics[0];
    }

    calculateOxygenGeneratorRating() {
        let generatorDiagnostics = this._diagnostics;
        for (let i = 0; i < generatorDiagnostics[0].length; i++) {
    
            if (generatorDiagnostics.length == 1) return generatorDiagnostics[0];

            let group = [];
            for (let I = 0; I < generatorDiagnostics.length; I++) {
                group.push(generatorDiagnostics[I][i]);
            }

            // keep least common
            if (group.filter(g => g == 0).length > group.filter(g => g == 1).length) {
                generatorDiagnostics = generatorDiagnostics.filter(bit => bit[i] == 1);
            } else {
                generatorDiagnostics = generatorDiagnostics.filter(bit => bit[i] == 0); // if values equal, keep the 0s
            }
        }
        return generatorDiagnostics[0];
    }

    calcaulatePowerConsumption() {
        return parseInt(this.gamma, 2) * parseInt(this.epsilon, 2);
    }

    calculateLifeSupportRating() {
        return parseInt(this.co2Scrubber, 2) * parseInt(this.oxygenGenerator, 2);
    }
}

module.exports = Submarine;
