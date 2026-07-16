#!/usr/bin/env node
/**
 * Validate the MaundyClean SPA prototype:
 * 1. Check HTML structure (matched tags, balanced structure)
 * 2. Extract <script> contents and run through Node's VM to catch syntax errors
 * 3. Check for common issues (undefined refs, unclosed strings)
 */
const fs = require('fs');
const vm = require('vm');

const FILE = '/home/z/my-project/download/maundyclean-premium-spa.html';
const html = fs.readFileSync(FILE, 'utf8');
console.log(`File size: ${(html.length/1024).toFixed(1)} KB`);

// 1. Basic structure check
const opens = (html.match(/<section/g) || []).length;
const closes = (html.match(/<\/section>/g) || []).length;
console.log(`\n[Structure] <section> opens: ${opens}, closes: ${closes} ${opens===closes?'OK':'MISMATCH'}`);

const divOpens = (html.match(/<div/g) || []).length;
const divCloses = (html.match(/<\/div>/g) || []).length;
console.log(`[Structure] <div> opens: ${divOpens}, closes: ${divCloses} ${divOpens===divCloses?'OK':'MISMATCH (may include self-closing)'}`);

// 2. Extract main script
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if(!scriptMatch){
  console.log('\n[FATAL] No <script> block found');
  process.exit(1);
}
const script = scriptMatch[1];
console.log(`\n[Script] Extracted ${(script.length/1024).toFixed(1)} KB of JavaScript`);

// 3. Try to parse the script (syntax check only, no execution of DOM code)
try {
  new vm.Script(script, { filename: 'maundyclean-spa.js' });
  console.log('[Script] Syntax check: PASSED');
} catch (e) {
  console.log('[Script] Syntax ERROR:');
  console.log('  ' + e.message);
  if(e.stack){
    const lines = e.stack.split('\n').slice(0,5).join('\n  ');
    console.log('  ' + lines);
  }
  process.exit(1);
}

// 4. Check for undefined icon references (I.xxx that don't exist in the icon object)
const iconDefMatch = script.match(/const I = \{([\s\S]*?)\n\};/);
if(iconDefMatch){
  const defined = new Set();
  const re = /\n\s+(\w+):/g;
  let m;
  while((m = re.exec(iconDefMatch[1]))){ defined.add(m[1]); }
  console.log(`\n[Icons] ${defined.size} icons defined`);
  
  // Find all I.xxx usages
  const usageRe = /I\.(\w+)/g;
  const used = new Set();
  while((m = usageRe.exec(script))){ used.add(m[1]); }
  const undef = [...used].filter(u => !defined.has(u));
  if(undef.length){
    console.log(`[Icons] WARNING - referencing undefined icons: ${undef.join(', ')}`);
  } else {
    console.log('[Icons] All referenced icons exist: OK');
  }
}

// 5. Check all routes are registered
const routeMatches = script.match(/route\('([^']+)',/g) || [];
console.log(`\n[Routes] ${routeMatches.length} routes registered:`);
routeMatches.forEach(r => console.log('  ' + r.replace("route('", "  ").replace("',", "")));

// 6. Check template literals are balanced (count backticks)
const backticks = (script.match(/`/g) || []).length;
console.log(`\n[Templates] Backtick count: ${backticks} ${backticks%2===0?'(balanced)':'(UNBALANCED!)'}`);

console.log('\n✓ Validation complete.');
