/*jslint browser: true, regexp: true, nomen: true, indent:2, white:true, sloppy:true, debug:true */
/* vim: set ft=javascript: */

import { lookup, PrefixInfo } from "../e164";
import * as assert from "assert";

assert.deepEqual(
  { prefix: "1514", country: "Canada", code: "CA" } as PrefixInfo,
  lookup("15141234567")
);
assert.deepEqual(
  { prefix: "1514", country: "Canada", code: "CA" } as PrefixInfo,
  lookup("+15141234567")
);
assert.deepEqual(undefined, lookup("18001231234"));
assert.deepEqual(
  { prefix: "1870", country: "United States", code: "US" } as PrefixInfo,
  lookup("18703434345")
);
assert.deepEqual(
  { prefix: "91", country: "India", code: "IN" } as PrefixInfo,
  lookup("9191")
);
assert.deepEqual(
  { prefix: "6723", country: "Norfolk Island", code: "NF" } as PrefixInfo,
  lookup("672322424")
);
assert.deepEqual(
  {
    prefix: "8811",
    country: "ICO Global (Mobile Satellite Service)",
    code: "ZZ",
  } as PrefixInfo,
  lookup("88112311")
);
assert.deepEqual(
  { prefix: "1418", country: "Canada", code: "CA" } as PrefixInfo,
  lookup("1418")
);
assert.deepEqual(
  { prefix: "1603", country: "United States", code: "US" } as PrefixInfo,
  lookup("1603")
);
assert.deepEqual(
  { prefix: "60", country: "Malaysia", code: "MY" } as PrefixInfo,
  lookup("603")
);
assert.deepEqual(undefined, lookup("0"));

console.log("ok");
