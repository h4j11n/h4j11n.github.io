import {writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const [slug,title]=process.argv.slice(2);
if(!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || !title){console.error('用法：npm run new -- my-first-note "我的第一篇笔记"');process.exit(1)}
const date=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
const target=fileURLToPath(new URL('../src/content/posts/'+slug+'.md',import.meta.url));
try{writeFileSync(target,`---\ntitle: ${JSON.stringify(title)}\ndate: ${date}\ndescription: 请填写文章摘要。\ntags:\n  - 学习笔记\ndraft: true\n---\n\n在这里开始写正文。\n`,{flag:'wx'});console.log('草稿已创建：'+target)}catch(e){console.error('创建失败，已有文章不会被覆盖。',e.message);process.exit(1)}
