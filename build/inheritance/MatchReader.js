"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
// declaring which type of content we expect to read, aka a string
// otherwise we'd get a buffer with the raw data
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        // take info of a row, convert it, and return it
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
    }
}
exports.MatchReader = MatchReader;
