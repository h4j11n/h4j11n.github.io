# 首次部署交接

## 已确认的旧仓库

远程：https://github.com/h4j11n/h4j11n.github.io.git

- `main`：旧站生成网页，检查时为 `57e072a6f52964e4957c840ab6ce7476d554d1a1`。
- `source`：旧 Hexo 源码，检查时为 `9ee3355602669778deb62c954bef3e020bb46009`。
- 原电脑工程保留在 `/Users/inin/Desktop/my-blog/`，没有修改。

## 安全迁移顺序

1. 重新获取远程状态，确认没有新的改动。给旧 `main` 创建备份分支或标签，保留旧 `source`。
2. 从最新 `main` 创建迁移分支，把本工程源码替换旧发布文件。复制时排除 `node_modules`、`dist`、`.astro`。不要把旧 3.1 GB 数据集复制进新工程。
3. 提交改动并创建 PR，检查 `npm run verify` 通过。
4. 在仓库 Settings → Pages → Build and deployment，将 Source 设为 GitHub Actions。
5. 合并 PR 到 `main`，触发 `Check and deploy blog`。若先合并后改设置，则在设置完成后手动运行该工作流。
6. 等待部署成功，访问首页、旧文章地址、归档、RSS，确认线上结果。

后续源码保存在 `main`，网页由 Actions 生成，不再手工提交生成后的 HTML。旧 `source` 作为迁移前备份保留，不再作为日常编辑分支。

## 回滚

优先撤销迁移后的错误提交并重新运行工作流。若必须完整恢复旧 Hexo 站点，使用第一步保存的旧网页备份分支，并将 Pages Source 恢复为 Deploy from a branch、选择该备份分支根目录。不要删除旧源码分支。

## 旧站备份

旧网页已保存到 `backup/hexo-before-astro-20260929` 分支。部署结果以 GitHub Actions 中的成功记录和正式网站为准。
