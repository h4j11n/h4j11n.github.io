# h4j11n 的博客

Astro 静态博客，Markdown 写作，GitHub Pages 托管。保留现有文章网址，使用 npm 管理依赖。旧 Hexo 工程未修改。

## 第一次打开

用 VS Code 打开本文件所在文件夹，菜单「终端 → 新建终端」。需要 Node.js 24。

```sh
npm ci
npm run dev
```

打开终端显示的本地网址。保持终端运行，保存文章后刷新即可预览。关闭预览按 Ctrl+C。

## 写文章

在终端执行（英文名决定网址，发布后不要随意改）：

```sh
npm run new -- my-first-note "我的第一篇笔记"
```

打开新建的 `src/content/posts/my-first-note.md`，修改正文、摘要和标签。

- `draft: true`：草稿，仅本地开发预览可见。构建后的网站、RSS、归档、标签页和站点地图都不会包含草稿。
- `draft: false`：发布。日期仅用于展示和排序，不用于定时发布；未来日期也会发布。
- 日期格式 `2026-09-29`；标题包含冒号时保留双引号。
- 可直接复制 `templates/post.md` 到文章目录，改成新文件名。复制时请修改日期。
- 本地预览可见的草稿，推送到公开仓库后，Markdown 源文件仍然是公开的。私密笔记不要放进此仓库。

## 插入图片

将图片放到 `public/images/my-first-note/example.webp`，正文写：

```markdown
![这张图的说明](/images/my-first-note/example.webp)
```

建议压缩后再加入。博客中不放模型、训练数据集、原始大图或密码。旧工程的 3.1 GB 识花数据集没有迁入；原 CSV 仍保存在旧工程中。

## 发布或更新

首次上线配置完成后：

1. 本地预览，检查手机宽度、图片、链接和代码块。
2. 将准备发布的文章设为 `draft: false`。
3. 执行 `npm run verify`。有错误时先修复。
4. 在 VS Code「源代码管理」中检查改动，填写说明，提交并推送到 `main`。
5. 在 GitHub 仓库 Actions 页面查看 `Check and deploy blog` 是否成功。
6. 打开 https://h4j11n.github.io/ 确认结果。

修改旧文也是这套流程。不运行旧 Hexo 的 `hexo deploy` 或 `npm run deploy`。

## 首次上线

本工程关联博客远程仓库。首次迁移步骤与回滚方式见 DEPLOYMENT.md。日常写作使用新版工程的 main 分支，不要从旧 Hexo 工程推送。

## 维护

- 每月处理 Dependabot 更新：查看改动、检查构建和页面，再合并。无需自动接受所有升级。
- 每季度检查外链和个人介绍。
- 改站点信息：`src/layouts/Base.astro`、`src/pages/index.astro`、`src/pages/atom.xml.ts`。
- 改外观：`src/styles/global.css`。
- 运行 `npm run verify` 会校验类型、构建、内部资源链接、旧文章地址及数据集排除。
- 故障回滚：在 GitHub 或本地撤销出错提交，再推送；Actions 将重新发布恢复后的源码。不需要删除仓库。

## 验收与范围

已迁入《NeuronSpark 2026》完整本地正文；保留原日期和中文永久链接，新增摘要。默认 Hello World 不再展示，其旧链接转到归档。旧分类与日期归档链接也保留跳转入口。

没有评论、账号系统、数据库或访问统计；目前只需维护文章和少量构建依赖。
