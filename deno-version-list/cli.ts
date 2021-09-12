import { Command } from "./deps.ts";
import { matchVersion, versionList } from "./mod.ts";

const { options } = await new Command()
  .name("denoversions")
  .version("0.1.1")
  .description("Outputs a list of version information.")
  .option(
    "-m, --match [match:boolean]",
    "Outputs information that matches the installed deno version.",
  )
  .parse(Deno.args);

const { match } = options;
if (!match) {
  versionList();
} else {
  matchVersion();
}
