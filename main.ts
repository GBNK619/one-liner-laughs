import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I told the gym I was cancelling. It said, 'We've missed you since 2019.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
