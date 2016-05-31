/**
 * This file contains declarations of global symbols we reference in our code
 */

declare var assert: any;

// FIXME: K must be string!
// FIXME: should have an index signature, `[k: string]: V;`
interface StringMap<K extends string, V> {}

interface BrowserNodeGlobal {
  Object: typeof Object;
  Array: typeof Array;
  Map: typeof Map;
  Set: typeof Set;
  Date: typeof Date;
  RegExp: typeof RegExp;
  JSON: typeof JSON;
  Math: typeof Math;
  assert(condition): void;
  setTimeout: Function;
  clearTimeout: Function;
  setInterval: Function;
  clearInterval: Function;
}
