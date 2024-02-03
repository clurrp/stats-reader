import fs from 'fs';

// Reasons to create this class
// 1. Reusable source of info in application
// 2. Use it on other csvs, which may have different
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row:string[]): T;

  // read(), open & parse file
  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    }).split('\n')
    .map((row: string) => {
      return row.split(',')
    }).
      // convert to another type if appropriate
      map(this.mapRow)
    }

  
}