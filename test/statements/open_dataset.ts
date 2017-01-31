import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "OPEN DATASET lv_file_name FOR OUTPUT IN BINARY MODE.",
  "OPEN DATASET lv_element FOR INPUT IN TEXT MODE ENCODING DEFAULT.",
  "OPEN DATASET file FOR INPUT IN BINARY MODE.",
  "OPEN DATASET file FOR INPUT IN BINARY MODE AT POSITION foo-pos.",
  "open dataset file for input in text mode at position lv_pos encoding default.",
  "OPEN DATASET file FOR INPUT IN TEXT MODE ENCODING UTF-8 MESSAGE msg IGNORING CONVERSION ERRORS.",
  "OPEN DATASET file FOR OUTPUT IN LEGACY TEXT MODE.",
  "OPEN DATASET file FOR OUTPUT IN LEGACY BINARY MODE.",
  "OPEN DATASET file FOR INPUT IN TEXT MODE ENCODING UTF-8 SKIPPING BYTE-ORDER MARK.",
  "OPEN DATASET file FOR INPUT AT POSITION lv_pos IN BINARY MODE.",
  "OPEN DATASET me->mv_file FOR INPUT IN BINARY MODE MESSAGE lv_msg.",
  "OPEN DATASET file IN TEXT MODE FOR INPUT ENCODING DEFAULT.",
];

statementType(tests, "OPEN", Statements.Open);