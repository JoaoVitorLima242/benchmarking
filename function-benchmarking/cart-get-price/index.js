import Benchmark from "benchmark";

import database from "../../database.js"
import CartOld from "./old.js";
import CartNew from "./new.js";

const suite = new Benchmark.Suite;

suite
  .add('Cart#getPriceMapsReduce', () => {
    new CartOld(database)
  })
  .add('Cart#getPriceFor', () => {
    new CartNew(database)
  })
  .on("cycle", event => console.log(String(event.target)))
  .on("complete", function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
