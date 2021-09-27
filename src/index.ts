import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalyses";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReport";

// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport()
// );

const summary = Summary.winsAnalysisWithHttpReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
// console.log('==== Data =====', matchReader.matches);
