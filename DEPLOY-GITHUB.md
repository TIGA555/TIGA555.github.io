# 用 GitHub Pages 免费上线

这个网站是纯静态页面，GitHub Pages 可以直接托管，完全免费，不需要服务器。

## 第 1 步：注册 GitHub 账号

1. 打开 https://github.com/signup 注册账号。
2. 注册时需要一个邮箱，登录后确认邮箱即可。

> 如果注册页面加载慢，可以多试几次，或者稍后再试。

## 第 2 步：创建仓库并上传代码

这个网站目录已经初始化好了 Git 仓库，代码也提交过了，你只需要：

1. 登录 GitHub，点右上角 **+** → **New repository**。
2. 仓库名填 `你的用户名.github.io`（比如用户名叫 `zhangsan`，就填 `zhangsan.github.io`）。
   - 用这个名字，稍后你的网址就是 `https://zhangsan.github.io`，最简洁。
   - 也可以随便起别的名字，比如 `my-site`，但网址会变成 `https://zhangsan.github.io/my-site/`，而且需要下面第 4 步的小改动。
3. 选择 **Public**（公开），不要勾选任何初始化选项（README、gitignore 都不勾）。
4. 创建完成后，在本地电脑上打开命令行（PowerShell），执行：

```powershell
cd C:\Users\何小朋\Documents\Codex\2026-08-31\ni-h\outputs\personal-website
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

第一次推送会弹出窗口让你登录 GitHub 账号，按提示完成即可。

## 第 3 步：打开 GitHub Pages

1. 在仓库页面点 **Settings**（设置）。
2. 左侧找到 **Pages**。
3. **Branch** 选择 `main`，文件夹选 `/ (root)`，点 **Save**。
4. 等 1～2 分钟，页面上方会显示你的网址，例如 `https://你的用户名.github.io`。
5. 用手机或让朋友打开这个网址，就可以访问你的网站了。

## 以后怎么更新网站

每次修改完 `index.html` 等文件后，执行：

```powershell
git add .
git commit -m "更新网站"
git push
```

推送完成后等一两分钟，GitHub 会自动更新你的网站，不用做任何额外操作。

## 小提示

- 国内访问 GitHub Pages 偶尔会慢，这是正常的。以后想更稳定、更快的国内访问，再迁移到阿里云 OSS 即可，静态页面迁移很轻松。
- 网站里所有的占位内容都改成你自己的内容后，再正式对外发布。
- 想要自己的域名（比如 `zhangsan.com`），在 GitHub Pages 设置里可以绑定，之后配合备案即可。
