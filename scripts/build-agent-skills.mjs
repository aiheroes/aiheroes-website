// Agent skills discovery index (runs after `astro build`): dist/.well-known/agent-skills/index.json
// per the Agent Skills Discovery RFC v0.2.0. One entry per public/.well-known/agent-skills/<name>/SKILL.md,
// with the name and description from its frontmatter and the sha256 of the file as served, so the
// digest can never drift from the skill. Fails the build on a skill with a bad name or no description.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://aiheroes.io';
const DIR = join('dist', '.well-known', 'agent-skills');

const skills = readdirSync(DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(DIR, d.name, 'SKILL.md')))
  .map((d) => {
    const bytes = readFileSync(join(DIR, d.name, 'SKILL.md'));
    const front = /^---\n([\s\S]*?)\n---\n/.exec(bytes.toString('utf8'))?.[1] ?? '';
    const field = (key) => new RegExp(`^${key}:\\s*(.+)$`, 'm').exec(front)?.[1].trim() ?? '';
    const name = field('name');
    const description = field('description');
    if (name !== d.name || !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name)) throw new Error(`agent skill ${d.name}: frontmatter name must be "${d.name}"`);
    if (!description) throw new Error(`agent skill ${d.name}: frontmatter needs a description`);
    return {
      name,
      type: 'skill-md',
      description,
      url: `${SITE}/.well-known/agent-skills/${name}/SKILL.md`,
      digest: `sha256:${createHash('sha256').update(bytes).digest('hex')}`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const index = { $schema: 'https://schemas.agentskills.io/discovery/0.2.0/schema.json', skills };
writeFileSync(join(DIR, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
console.log(`build-agent-skills: ${skills.length} skills in /.well-known/agent-skills/index.json`);
