import Benchmark from "benchmark";
import CartOld from "./old.js";
import CartNew from "./new.js";

const suite = new Benchmark.Suite;

const data = {
  products: [
    {
      id: "12",
      n: undefined,
      abv: undefined,
    },
    {
      id: "12",
      n: undefined,
      abv: undefined,
    },
  ]
}

suite
  .add('Cart#rmEmptyPropsMapsReduce', () => {
    new CartOld(data)
  })
  .add('Cart#rmEmptyPropsFor', () => {
    new CartNew(data)
  })
  .on("cycle", event => console.log(String(event.target)))
  .on("complete", function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
