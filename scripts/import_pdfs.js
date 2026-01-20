const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');
const srcDir = path.join(workspaceRoot, 'studymaterailpdfs');
const publicPapers = path.join(workspaceRoot, 'public', 'papers');
const dataDir = path.join(workspaceRoot, 'data');

if (!fs.existsSync(srcDir)) {
  console.error('Source folder not found:', srcDir);
  process.exit(1);
}

const SUBJECT_KEYWORDS = {
  economics: ['econom', 'eco', 'abt'],
  history: ['history', 'hist'],
  physics: ['physics', 'phy'],
  chemistry: ['chemistry', 'chem'],
  math: ['math', 'mathematics'],
  english: ['english', 'eng'],
  hindi: ['hindi'],
  geography: ['geography', 'geo'],
  politics: ['politics', 'political', 'psc', 'politicalscience', 'political_science'],
  sociology: ['sociology'],
  psychology: ['psychology'],
  sanskrit: ['sanskrit'],
  arts: ['arts', 'prelim', 'prelims']
};

function slugify(name) {
  return name
    .replace(/\.[^/.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 200);
}

function titleize(name) {
  return name
    .replace(/\.[^/.]+$/, '')
    .replace(/[_\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function detectSubject(filename) {
  const n = filename.toLowerCase();
  for (const [subject, keys] of Object.entries(SUBJECT_KEYWORDS)) {
    for (const k of keys) {
      if (n.includes(k)) return subject;
    }
  }
  return 'misc';
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => f.toLowerCase().endsWith('.pdf'));
if (files.length === 0) {
  console.log('No PDF files found in', srcDir);
  process.exit(0);
}

const summary = [];

for (const file of files) {
  const subject = detectSubject(file);
  const destDir = path.join(publicPapers, subject);
  ensureDir(destDir);

  const base = slugify(file);
  let destName = base + '.pdf';
  let counter = 1;
  while (fs.existsSync(path.join(destDir, destName))) {
    destName = `${base}-${counter}.pdf`;
    counter++;
  }

  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, destName);
  fs.renameSync(srcPath, destPath);

  // Update data/<subject>.ts previousPapers
  const dataFile = path.join(dataDir, `${subject}.ts`);
  const linkPath = `/papers/${subject}/${destName}`;
  const yearMatch = file.match(/(20\d{2})/);
  const year = yearMatch ? yearMatch[1] : new Date().getFullYear().toString();
  const title = titleize(file);

  if (fs.existsSync(dataFile)) {
    let content = fs.readFileSync(dataFile, 'utf8');
    if (content.includes(linkPath)) {
      summary.push({ file, subject, dest: destPath, note: 'already referenced in data file' });
      continue;
    }

    const needle = /previousPapers\s*:\s*\[/m;
    const insert = `    { year: '${year}', title: '${title}', link: '${linkPath}' },\n`;
    if (needle.test(content)) {
      content = content.replace(needle, match => match + '\n' + insert);
      fs.writeFileSync(dataFile, content, 'utf8');
      summary.push({ file, subject, dest: destPath, addedTo: dataFile });
    } else {
      summary.push({ file, subject, dest: destPath, note: 'data file exists but no previousPapers array found' });
    }
  } else {
    summary.push({ file, subject, dest: destPath, note: 'no data file for subject' });
  }
}

console.log('Import done. Summary:');
console.table(summary);
console.log('You may want to run `git add public/papers` and commit the changes.');
