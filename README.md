# 个人网站

一个可直接部署的静态个人网站：简介、技能、作品、博客、联系方式。

## 文件结构

```
personal-website/
├── index.html      # 页面内容，主要改这里
├── css/style.css   # 样式（颜色、字体、布局）
├── js/main.js      # 交互（菜单、深浅色、打字机效果、表单）
└── README.md       # 使用说明
```

## 怎么改成你自己的网站

1. 打开 `index.html`，把「你的名字」换成你的真实姓名。
2. 把首屏自我介绍、关于我的内容换成你自己的经历。
3. 技能、作品、博客三个板块按真实情况增删卡片。
4. 在 `js/main.js` 里把 `here@example.com` 换成你的邮箱。
5. 图片直接替换掉项目里的占位区域即可。

配色在 `css/style.css` 顶部的 `:root` 变量里，改 `--primary` 就能整体换主题色。

## 本地预览

直接双击打开 `index.html`，或者在项目目录运行：

```
python -m http.server 8000
```

然后浏览器访问 `http://localhost:8000`。
