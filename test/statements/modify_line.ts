import {statementType} from "../utils";
import * as Statements from "../../src/statements/";

let tests = [
  "MODIFY LINE sy-index FIELD VALUE lv_val FROM gc_false.",
];

statementType(tests, "MODIFY LINE", Statements.ModifyLine);