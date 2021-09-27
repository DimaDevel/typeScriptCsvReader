"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader("football.csv");
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis("Man United"),
//   new HtmlReport()
// );
var summary = Summary_1.Summary.winsAnalysisWithHttpReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
// console.log('==== Data =====', matchReader.matches);
