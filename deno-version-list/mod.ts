import { parse } from "https://deno.land/std@0.106.0/flags/mod.ts";
import { filterKeys } from "https://deno.land/std@0.106.0/collections/filter_keys.ts";

const targetUrl =
  "https://raw.githubusercontent.com/denoland/deno_website2/main/versions.json";

  function versionList(match: boolean) {
  fetch(targetUrl)
    .then((res) => res.json())
    .then((res) => {
      console.log("cli\t\t|std");
      if (match) {
        const denoVersion = Deno.version.deno;
        const matchVersions = filterKeys(
          res.cli_to_std,
          (key) => key.replaceAll("v", "") === denoVersion,
        );
        for (const [key, value] of Object.entries(matchVersions)) {
          if (key.length >= 10) {
            console.log(`${key}\t|${value}`);
          } else {
            console.log(`${key}\t\t|${value}`);
          }
        }
      } else {
        for (const [key, value] of Object.entries(res.cli_to_std)) {
          if (key.length >= 10) {
            console.log(`${key}\t|${value}`);
          } else {
            console.log(`${key}\t\t|${value}`);
          }
        }
      }
    });
}

const {
  m,
  h,
} = parse(Deno.args);

if (h) {
  const msg = `deno-versions
    Lists the version information of Deno.

    USAGE
      denolist [dirname] : Show the list.
    OPTIONS
      m     : Show matching versions
      h     : Show this help message
    `;
  console.log(msg);
  Deno.exit(0);
}

console.log(versionList(m));
