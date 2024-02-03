import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// the power of composition
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
