import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "ULINE.",
  "ULINE (92).",
  "ULINE /(80).",
  "ULINE /1(76).",
  "ULINE AT /.",
  "ULINE AT (c_line_size).",
  "ULINE AT /1(80) .",
  "ULINE AT 3(12).",
  "ULINE /10.",
];

statementType(tests, "ULINE", Statements.Uline);