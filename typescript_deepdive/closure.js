function createCounter() {
  let val = 0;
  return {
    increment() {
      val++
    },
    getVal() {
      return val
    },
    value:val
  }
}
let counter = createCounter()
let secoundCounter = createCounter()
counter.increment()
secoundCounter.increment()
console.log(counter.getVal(),secoundCounter.getVal())

secoundCounter.increment()
console.log(counter.getVal(),secoundCounter.getVal())
