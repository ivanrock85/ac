# 安程包车 (Ancheng Charter)

这是一个基于 Next.js 14、Tailwind CSS 和 PostgreSQL (Prisma) 构建的现代化包车服务网站。

## 功能特性

- **响应式设计**: 完美适配桌面、平板和移动端。
- **在线预约**: 支持包车、租赁、旅游线路的在线提交。
- **后台管理**: 简单的 `/admin` 后台，查看和导出预约记录。
- **SEO 优化**: 包含完整的元数据、Sitemap 和 Robots.txt。
- **数据库集成**: 使用 Prisma ORM 连接 PostgreSQL (推荐 Neon)。

## 本地开发

1.  **安装依赖**:
    ```bash
    npm install
    ```

2.  **配置环境变量**:
    复制 `.env.example` 为 `.env` 并填入配置：
    ```bash
    cp .env.example .env
    ```
    *   `DATABASE_URL`: 你的 PostgreSQL 连接字符串。
    *   `ADMIN_USER` / `ADMIN_PASSWORD`: 后台登录账号密码。

3.  **初始化数据库**:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

4.  **启动开发服务器**:
    ```bash
    npm run dev
    ```
    访问 `http://localhost:3000`。

## 部署指南 (Vercel + Neon)

本项目已准备好通过 Git 部署到 Vercel。

### 1. 准备数据库 (Neon)
1.  注册并登录 [Neon Console](https://console.neon.tech)。
2.  创建一个新项目 (Project)。
3.  复制 **Connection String** (连接字符串)。

### 2. 推送到 GitHub
1.  在 GitHub 上创建一个新的空仓库 (Repository)。
2.  在本地终端运行以下命令关联远程仓库并推送：
    ```bash
    git remote add origin <你的仓库地址>
    git branch -M main
    git push -u origin main
    ```

### 3. 部署到 Vercel
1.  注册并登录 [Vercel](https://vercel.com)。
2.  点击 **"Add New..."** -> **"Project"**。
3.  导入你刚才创建的 GitHub 仓库。
4.  在 **Environment Variables** (环境变量) 部分添加：
    *   `DATABASE_URL`: 填入 Neon 的连接字符串。
    *   `ADMIN_USER`: 设置你的后台用户名 (默认: admin)。
    *   `ADMIN_PASSWORD`: 设置你的后台密码。
5.  点击 **"Deploy"**。

### 4. 数据库迁移 (生产环境)
部署完成后，Vercel 会自动构建项目。为了确保数据库表结构被创建，你可以在 Vercel 的 Build Command 中添加迁移命令，或者在本地针对生产数据库运行：
```bash
# 在本地终端运行 (确保 .env 中的 DATABASE_URL 是 Neon 的地址)
npx prisma db push
```

## 后台管理
访问 `/admin` 路径 (例如 `https://your-domain.com/admin`) 并使用你设置的账号密码登录。
