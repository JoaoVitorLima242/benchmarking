import Benchmark from "benchmark";
import CartOld from "./cart-id/cart-id-old.js/index.js";
import CartNew from "./cart-id/cart-id-new.js/index.js";

const suite = new Benchmark.Suite;

suite
  .add('Cart#cartIdUUID', () => {
    new CartOld()
  })
  .add('Cart#cartIdCrypto', () => {
    new CartNew()
  })
  .on("cycle", event => console.log(String(event.target)))
  .on("complete", function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run()
