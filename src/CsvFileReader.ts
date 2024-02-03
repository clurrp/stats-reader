import fs from 'fs';
// Reasons to create this class
// 1. Reusable source of info in application
// 2. Use it on other csvs, which may have different column types
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  // read(), open & parse file
  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    }).split('\n')
    .map((row: string) => {
      return row.split(',')
    })
  }
}