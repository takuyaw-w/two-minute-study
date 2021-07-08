import { parse } from "https://deno.land/std@0.100.0/flags/mod.ts"

console.log(Deno.args)

console.log(parse(Deno.args))
