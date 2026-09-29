import {readdirSync,readFileSync,existsSync,statSync} from 'node:fs';
import {join,resolve,dirname} from 'node:path';
const root=resolve('dist');
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):[join(dir,e.name)])}
const files=walk(root),errors=[];
for(const file of files.filter(f=>f.endsWith('.html'))){
 const html=readFileSync(file,'utf8');
 for(const match of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)){
  const value=match[1].split('?')[0];
  if(/^(?:[a-z]+:|\/\/)/i.test(value))continue;
  let target;try{target=decodeURIComponent(value)}catch{errors.push(`Invalid URL ${value}`);continue;}
  target=target.startsWith('/')?join(root,target):resolve(dirname(file),target);
  if(existsSync(target)&&statSync(target).isDirectory())target=join(target,'index.html');
  if(!existsSync(target))errors.push(`${file}: missing ${value}`);
 }
}
for(const f of ['index.html','404.html','atom.xml','sitemap-index.xml','2026/05/30/NeuronSpark_2026/实战回忆及知识分享/index.html'])if(!existsSync(join(root,f)))errors.push('Missing required output '+f);
if(files.some(f=>f.includes('flower_reco')))errors.push('Dataset entered public output');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Verified ${files.length} outputs: internal links, old article URL, RSS, sitemap, dataset exclusion.`);
