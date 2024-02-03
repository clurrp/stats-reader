import { dateStringToDate } from './utils';
import { MatchResult } from "./MatchResult";
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    // reader could be api reader, csv reader, etc
    // get csv file, parse data, present 2-d array
    this.reader.read();
    // transformation of data
    this.matches = this.reader.data.map((row: string[]): MatchData  => {
      // convert to another type if appropriate
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        // convert to enum via type assertion
        row[5] as MatchResult,
        row[6]
      ];
    })
  }
}