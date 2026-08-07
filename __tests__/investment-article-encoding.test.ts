import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const investingPagesDirectory = path.join(
  process.cwd(),
  "src/pages/investing-in-peru",
);

function getArticleFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return getArticleFiles(entryPath);
    }

    return entry.name.endsWith(".tsx") ? [entryPath] : [];
  });
}

describe("investment article encoding", () => {
  it("does not contain common UTF-8 mojibake sequences", () => {
    const mojibake = /(?:\u00c3[\u0080-\u00bf]|\u00c5[\u0080-\u00bf]|\u00e2[\u0080-\u00bf]|\u00ef\u00bc)/;
    const corruptedFiles = getArticleFiles(investingPagesDirectory).filter((file) =>
      mojibake.test(readFileSync(file, "utf8")),
    );

    expect(corruptedFiles).toEqual([]);
  });
});
