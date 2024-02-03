"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
// By implementing, it'll check that we are implmenting this interface correctly, this is optional
class WinsAnalysis {
    // needs to satisfy the Analyzer interface
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            } // Can use else if to check different teams
        }
        return `Team ${this.team} win ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
