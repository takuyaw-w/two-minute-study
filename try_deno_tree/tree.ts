import { join, resolve } from "https://deno.land/std@0.100.0/path/mod.ts";
import { parse } from "https://deno.land/std@0.100.0/flags/mod.ts"

export interface TreeEntry extends Deno.DirEntry {
  path: string;
}

export interface TreeOptions {
  maxDepth?: number;
  includeFiles?: boolean;
  skip?: RegExp[];
}

function include(
  path: string,
  skip?: RegExp[],
): boolean {
  if (skip && skip.some((pattern): boolean => !!path.match(pattern))) {
    return false;
  }
  return true;
}

const tree = async (
  root: string,
  prefix = "",
  {
    maxDepth = Infinity,
    includeFiles = true,
    skip = undefined
  }: TreeOptions = {},
) => {
  // depthが0またはスキップ対象なら終了
  if (maxDepth < 1 || !include(root, skip)) {
    return;
  }

  const entries: TreeEntry[] = [];
  for await (const entry of Deno.readDir(root)) {
    if (entry.isFile && !includeFiles) {
      continue;
    }
    entries.push({ ...entry, path: join(root, entry.name) });
  }

  if (entries.length === 0) {
    return;
  }

  const sortedEntries = entries.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );
  const lastOne = sortedEntries[entries.length - 1];

  for await (const entry of sortedEntries) {
    const branch = entry === lastOne ? "└─" : "├─";
    const suffix = (entry.isDirectory) ? "/" : "";
    
    if (include(entry.path, skip)) {
      console.log(prefix + branch + entry.name + suffix);
    }

    if (entry.isDirectory) {
      const indent = entry === lastOne ? "  " : "│ ";
      await tree(entry.path, prefix + indent, {
        maxDepth: maxDepth - 1,
        includeFiles,
        skip
      });
    }
  }
};

const {
  a,
  d,
  L,
  _: [dir = "."]
} = parse(Deno.args)

const skip = [];
if (!a) {
  skip.push(/(^|\/)\./);
}

await tree(resolve(Deno.cwd(), String(dir)), "", {
  maxDepth: L,
  includeFiles: !d,
  skip
});
