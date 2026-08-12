# 任晨光 · AI全栈工程师作品集

> 纯静态单页作品集网站，无需后端，一键部署到 GitHub Pages / Vercel / Cloudflare Pages

## 项目简介

- **作者**: 任晨光
- **技术栈**: HTML5 + CSS3 + 原生JavaScript
- **项目数**: 11个（7个核心项目 + 4个课程实践）
- **特性**: 响应式设计、项目分类筛选、滚动动画、暗色主题

## 文件结构

```
完成项目/
├── index.html              ← 作品集主页面（部署入口）
├── README.md               ← 本文件
├── AuroraMusic/            ← Electron音乐播放器项目
├── Yolov5/                 ← YOLOv5人体检测项目
├── PyTorch-花卉/            ← 花卉分类深度学习项目
├── 新项目/                  ← ZAEP企业AI中台
├── 企业RAG搭建/             ← RAG知识库方案
├── 代码部分/                ← Arduino嵌入式项目
├── AI创意设计想法展示平台/   ← 设计创意展示
├── AI_agent提示词/          ← AI Agent提示词合集
└── 人工智能（专升本）1班_...← Hadoop大数据课程考核
```

---

## 部署方案

### 方案一：GitHub Pages（推荐，免费永久）

**适用场景**: 纯静态页面，简历标准写法，链接永久有效

#### 步骤

1. **登录 GitHub**
   - 访问 https://github.com 登录账号（你的账号：JinIilaiQiaoMen）

2. **创建新仓库**
   - 点击右上角 `+` → `New repository`
   - 仓库名填：`portfolio`（或 `my-portfolio`）
   - 选择 `Public`（公开）
   - 勾选 `Add a README file`
   - 点击 `Create repository`

3. **上传文件**
   - 方式A（网页上传）：点击 `uploading an existing file`，将 `index.html` 拖入上传
   - 方式B（Git命令）：
     ```bash
     git clone https://github.com/JinIilaiQiaoMen/portfolio.git
     # 将 index.html 复制到克隆的文件夹中
     cd portfolio
     git add .
     git commit -m "Add portfolio website"
     git push origin main
     ```

4. **开启 GitHub Pages**
   - 进入仓库 → `Settings` → 左侧 `Pages`
   - Source 选择 `Deploy from a branch`
   - Branch 选择 `main`，文件夹选 `/ (root)`
   - 点击 `Save`
   - 等待 1-2 分钟，页面顶部会显示你的链接

5. **获取链接**
   ```
   https://jinilaiqiaomen.github.io/portfolio/
   ```

6. **简历填写格式**
   ```
   作品集：https://jinilaiqiaomen.github.io/portfolio/
   源码地址：https://github.com/JinIilaiQiaoMen/portfolio
   ```

---

### 方案二：Vercel（最快，5分钟上线）

**适用场景**: 自动构建、自带HTTPS、全球CDN加速

#### 步骤

1. 访问 https://vercel.com，点击 `Sign Up`，选择 `Continue with GitHub` 登录

2. 点击 `Add New...` → `Project`

3. 导入你的 GitHub 仓库（先按方案一创建仓库并上传 index.html）

4. Framework Preset 选择 `Other`（纯静态页面）

5. 点击 `Deploy`，等待 30 秒

6. **获取链接**
   ```
   https://portfolio-xxx.vercel.app
   ```

7. 可在 `Settings` → `Domains` 中自定义子域名

---

### 方案三：Cloudflare Pages

**适用场景**: 国内访问速度较好，免费无限带宽

#### 步骤

1. 访问 https://dash.cloudflare.com 注册/登录

2. 左侧菜单 → `Workers & Pages` → `Create application` → `Pages`

3. 连接 GitHub 仓库，选择你的 portfolio 仓库

4. 构建设置：
   - Framework preset: `None`
   - Build command: 留空
   - Build output directory: `/`

5. 点击 `Save and Deploy`

6. **获取链接**
   ```
   https://portfolio-xxx.pages.dev
   ```

---

## 本地预览

### 方式一：直接打开
双击 `index.html` 即可在浏览器中预览

### 方式二：启动本地服务器（推荐）
```bash
# Python 方式
python -m http.server 8080

# Node.js 方式
npx serve .

# PHP 方式
php -S localhost:8080
```
然后访问 `http://localhost:8080`

---

## 简历作品板块文案模板

```
作品集
────────────────────────────────────
在线演示：https://jinilaiqiaomen.github.io/portfolio/
源码地址：https://github.com/JinIilaiQiaoMen

核心项目：
1. YOLOv8航拍小目标检测 — mAP提升9.3%，Jetson Orin NX部署15-20FPS
2. ZAEP企业AI中台 — 8大核心模块，RAG引擎+多智能体调度
3. AuroraMusic播放器 — Electron+Vue3，12种音频格式混音输出
4. Window-Agent-MCP — 32个工具接口的Windows自动化MCP服务器
```

---

## 求职避坑清单

- [x] 链接为 HTTPS，非 http
- [x] 打开即可直接浏览，无需额外操作
- [x] 无 localhost 本地链接
- [x] 无内网穿透临时链接
- [x] 响应式设计，手机端可正常浏览
- [x] 无密钥、密码等敏感信息泄露
- [ ] GitHub 仓库已上传（需手动操作）
- [ ] GitHub Pages 已开启（需手动操作）
- [ ] README.md 已完善（建议补充项目截图）

---

## 后续优化建议

1. **补充项目截图**: 为每个项目添加 1-2 张效果图/截图
2. **上传源码到GitHub**: 将各项目源码分别上传到独立仓库
3. **添加 Google Analytics**: 追踪访问数据（可选）
4. **自定义域名**: 购买个人域名（如 `renchenguang.com`）提升专业感
5. **补充在线Demo**: 将 ZAEP、AuroraMusic 等项目部署为可交互Demo

---

## 联系方式

- **邮箱**: rcg1620299404@163.com
- **电话**: 18133817602
- **GitHub**: https://github.com/JinIilaiQiaoMen

© 2026 任晨光 · AI全栈工程师作品集
