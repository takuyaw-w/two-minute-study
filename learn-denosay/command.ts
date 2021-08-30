import {Command} from "https://deno.land/x/cliffy@v0.19.5/command/mod.ts"

const { options, args } = await new Command()
  .name("cliffy sample command")
  .version("0.1.0")
  .description("Command line arguments parser")
  .option("-a, --all", "show all.")
  .arguments("<arg>")
  .parse(Deno.args);

console.log({args})
console.log({options})