import Sub from "./sub.ts"

export default class Main extends Sub {
  constructor() {
    super()
    this.publicMethods()
  }
}

const main = new Main()
