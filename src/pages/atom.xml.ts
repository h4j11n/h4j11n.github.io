import rss from '@astrojs/rss';
import {publishedPosts,postUrl} from '../lib/posts';
export async function GET(){return rss({title:'h4j11n · 个人笔记',description:'技术实践、比赛复盘与学习记录',site:'https://h4j11n.github.io',items:(await publishedPosts(false)).map(p=>({title:p.data.title,description:p.data.description,pubDate:p.data.date,link:postUrl(p)})),customData:'<language>zh-cn</language>'});}
