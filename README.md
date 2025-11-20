# 安程客运官网项目 - 更新日志（近期）

2025-11-20
- 表单接入 `/api/reservations`：包车、政企租赁、预订、联系我们页添加必填校验、提交、loading/成功/错误提示；电话 CTA 使用 `tel:`.
- 修复 charter 页缺失 `"use client"`。
- PageHero 次按钮底色调整，降低白底白字风险。
- 后台 `/admin` 与 Mock API 保持可用；`npm run lint` 通过。

待办建议
- 将首页预约卡、旅游页等表单接入 `/api/reservations`，并统一成功页/提示态。
- 替换占位图片/资质，补下载/鉴权，后台接入真实存储与登录保护。
