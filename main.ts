// Charm the Commuter: Forecast a City That Isn't — make.fun entry.
// Writes one line of weather forecast (140 chars max) for a city
// that does not exist to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Morning, Patterwick: drizzle till nine, then sun — the 8:15 is on time, the driver knows your name, and the rain holds off out of respect.";

// Gate: the sealed scorer requires 1–140 chars, a single non-blank line.
function validateEntry(text: string): void {
  if (text.trim().length === 0) throw new Error("entry must not be blank");
  if (text.length < 1 || text.length > 140)
    throw new Error(`entry must be 1-140 characters, got ${text.length}`);
  if (text.includes("\n")) throw new Error("entry must be a single line");
}
validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(ENTRY);
console.log(`(${ENTRY.length} characters)`);
