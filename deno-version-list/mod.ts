import { Table } from "./deps.ts";
import { filterKeys } from "./deps.ts";

export interface VersionResponse {
  "std": string[];
  "cli": string[];
  "cli_to_std": Record<string, string>;
}
const _DENO_VERSION = Deno.version.deno;

const targetUrl =
  "https://raw.githubusercontent.com/denoland/deno_website2/main/versions.json";

export const versionList = async (): Promise<void> => {
  const versions = await fetchVersion();
  const data = Object.entries(versions.cli_to_std);
  new Table()
    .header(["cli", "std"])
    .body(data)
    .padding(1)
    .indent(2)
    .border(true)
    .render();
};

export const matchVersion = async (): Promise<void> => {
  const versions = await fetchVersion();
  const matchVersions = filterKeys(
    versions.cli_to_std,
    (key) => key.replaceAll("v", "") === _DENO_VERSION,
  );
  const data = Object.entries(matchVersions);
  new Table()
    .header(["cli", "std"])
    .body(data)
    .padding(1)
    .indent(2)
    .border(true)
    .render();
};

const fetchVersion = async (): Promise<VersionResponse> => {
  const data = await fetch(targetUrl);
  const versions = await data.json();
  return versions;
};
