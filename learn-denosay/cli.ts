import {Command} from "https://deno.land/x/cliffy@v0.19.5/command/mod.ts"
import {denosay, denoshout, denothink} from "./mod.ts"

const {options, args} = await new Command()
    .name("denosay")
    .description("Command line arguments parser")
    .description("Say your awesome text with ascii art.")
    .option("-t, --think", "Change balloon to rounded.")
    .option("-s, --shout", "Change balloon to spiky.", { conflicts: ["think"]})
    .arguments("<text>")
    .parse(Deno.args)

const {
    think,
    shout,
} = options

const runner = think ? denothink : shout ? denoshout : denosay;
console.log(runner(String(args[0])))
