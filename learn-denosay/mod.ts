import stringWidth from "https://cdn.skypack.dev/string-width";

type Delimiters = {
  first: [string, string];
  middle: [string, string];
  last: [string, string];
  only: [string, string];
  vertical: [string, string];
};

function surround(cover: [string, string], text: string, padding = " ") {
  return cover[0] + padding + text + padding + cover[1];
}

function renderBalloon(text: string, delimiters: Delimiters) {
  if (!text) {
    throw new Error("Input text is required");
  }
  const lines = text.split("\n");
  const maxLength = lines.reduce(
    (acc, current) => Math.max(stringWidth(current), acc),
    0,
  );
  const top = " " + delimiters.vertical[0].repeat(maxLength + 2);
  const bottom = " " + delimiters.vertical[1].repeat(maxLength + 2);

  const balloon = [top];
  if (lines.length === 1) {
    balloon.push(surround(delimiters.only, lines[0]));
  } else {
    for (let i = 0, len = lines.length; i < len; i++) {
      const delimiter = (i === 0)
        ? delimiters.first
        : (i === len - 1)
        ? delimiters.last
        : delimiters.middle;

      balloon.push(
        surround(
          delimiter,
          lines[i] + " ".repeat(maxLength - stringWidth(lines[i])),
        ),
      );
    }
  }
  balloon.push(bottom);

  return balloon.join("\n");
}

function render(text: string, delimiters: Delimiters, thoughts: string) {
  return renderBalloon(text, delimiters) + renderAA(thoughts);
}

const AA = String.raw`
    $T
     $T  _
       ( ･ヽ
         \ \
          ⎞ \
          |  ｀ヽ
          ⎩      ﾄ､
           u¯u︶u
`;

function renderAA(thoughts = " "): string {
  return AA.replaceAll("$T", thoughts);
}

export function denosay(text: string) {
  const delimiters: Delimiters = {
    first: ["/", "\\"],
    middle: ["|", "|"],
    last: ["\\", "/"],
    only: ["<", ">"],
    vertical: ["_", "-"],
  };
  return render(text, delimiters, "\\");
}

export function denothink(text: string) {
  const delimiters: Delimiters = {
    first: ["(", ")"],
    middle: ["(", ")"],
    last: ["(", ")"],
    only: ["(", ")"],
    vertical: ["◠", "◡"],
  };

  return render(text, delimiters, "o");
}

export function denoshout(text: string) {
  const delimiters: Delimiters = {
    first: ["<", ">"],
    middle: ["<", ">"],
    last: ["<", ">"],
    only: ["<", ">"],
    vertical: ["^", "v"],
  };
  return render(text, delimiters, "\\");
}
