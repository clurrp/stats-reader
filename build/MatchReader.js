"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    static fromCsv(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        // reader could be api reader, csv reader, etc
        // get csv file, parse data, present 2-d array
        this.reader.read();
        // transformation of data
        this.matches = this.reader.data.map((row) => {
            // convert to another type if appropriate
            return [
                (0, utils_1.dateStringToDate)(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                // convert to enum via type assertion
                row[5],
                row[6]
            ];
        });
        // map gives us a new array back, save it as property of class
    }
}
exports.MatchReader = MatchReader;
