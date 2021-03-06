import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "READ DATASET filename INTO wa_rawdata LENGTH length.",
  "READ DATASET lv_filename INTO ls_data MAXIMUM LENGTH lv_max ACTUAL LENGTH lv_actual.",
  "read dataset filename into lv_content maximum length 300000 actual length lv_actual.",
];

statementType(tests, "READ DATASET", Statements.ReadDataset);