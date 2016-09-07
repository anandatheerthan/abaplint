import { Statement } from "./statement";
import Reuse from "./reuse";
import * as Combi from "../combi";

let str = Combi.str;
let seq = Combi.seq;

export class GetReference extends Statement {

  public static get_matcher(): Combi.IRunnable {
    let ret = seq(str("GET REFERENCE OF"),
                  Reuse.source(),
                  str("INTO"),
                  Reuse.target());

    return ret;
  }

}