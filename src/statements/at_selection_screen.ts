import { Statement } from "./statement";
import Reuse from "./reuse";
import * as Combi from "../combi";

let str = Combi.str;
let seq = Combi.seq;
let alt = Combi.alt;
let opt = Combi.opt;

export class AtSelectionScreen extends Statement {

  public static get_matcher(): Combi.IRunnable {
    let output = str("OUTPUT");
    let value = seq(str("ON VALUE-REQUEST FOR"), Reuse.field());
    let exit = str("ON EXIT-COMMAND");
    let field = seq(str("ON"), Reuse.field());
    let ret = seq(str("AT SELECTION-SCREEN"), opt(alt(output, value, exit, field)));

    return ret;
  }

  public isStructure() {
    return true;
  }

  public isValidParent(s) {
    return s === undefined;
  }

  public indentationSetStart() {
    return 0;
  }

  public indentationSetEnd() {
    return 2;
  }

}