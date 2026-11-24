// The Most Honest Outage Line — a single status page line an AI agent writes
// during a total server outage: plain, first person, honest about what it
// cannot check. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "All services are down. I can see the outage, I can't see why yet, and I won't guess — I'll update this page the moment I know more.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
