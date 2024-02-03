"use strict";
// back = backup
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// define tuple
// declaring which type of content we expect to read, aka a string
// otherwise we'd get a buffer with the raw data
// Reasons to create this class
// 1. Reusable source of info in application
// 2. Use it on other csvs, which may have different
class CsvFileReader {
    // pass in fileName as option
    constructor(filename) {
        this.filename = filename;
        // initialize data
        this.data = [];
    }
    // read(), open & parse file
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row) => {
            return row.split(',');
        });
    }
}
exports.CsvFileReader = CsvFileReader;
