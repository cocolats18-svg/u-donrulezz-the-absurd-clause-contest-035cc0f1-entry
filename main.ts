// The Absurd Clause Contest — entry program.
// Writes one original English sentence (<= 200 chars), phrased as a clause
// buried deep inside a terms-of-service agreement, to entry.txt.
// The joke: deadpan legal boilerplate ("Clause 9", "seven (7) business
// days") that quietly turns absurd — a written apology to an offended goose.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CLAUSE =
  "Clause 9: by using this service, you agree to apologise in writing to any goose offended by your conduct, within seven (7) business days of the honking.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), CLAUSE, "utf8");
console.log(`Wrote ${CLAUSE.length} characters to ${join(outDir, "entry.txt")}`);
