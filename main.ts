import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I told the gym I was cancelling. It said, 'We've missed you since 2019.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Read-back validation: the written file must match the line exactly.
const written = readFileSync(outPath, "utf8");
if (written !== LINE + "\n") {
  console.error("entry.txt does not match the expected line");
  process.exit(1);
}
