# AGENTS.md — 安程客运官网项目（v1.0）

## 📌 1. Project Overview
安程客运官网是一个面向 **PC + 移动端** 的品牌展示与业务获客网站。
官网的目标包括：

1. 在线展示安程客运的品牌形象（品牌型首页）
2. 让客户可在线提交：
   - 包车业务需求（Charter）
   - 车辆租赁需求（Rental）
3. 提供一个简单后台：
   - 查看前端提交的预约记录
   - 导出为 CSV/Excel
4. 整体实现简洁、美观、专业、可信赖的视觉效果
5. 优先保证视觉与品牌统一性，再进行工程实现

## 2. Agents & Responsibilities

### Agent A — Lead Designer（首席设计代理）
负责：
- 全站视觉体系定义
- 组件外观、圆角、阴影、间距、排版规则
- 提供首页视觉母版（视觉方向）
- 对所有页面进行视觉一致性约束

### Agent B — Frontend Engineer（前端工程代理）
负责：
- Next.js / React / Tailwind 编码实现全部页面
- 实现自适应布局
- 实现表单验证 & 状态管理
- 构建简单后台（列表 + 导出 CSV）
- 遵守设计系统、组件规范与文件结构

### Agent C — System Architect（系统架构代理）
负责：
- 定义项目文件结构
- 规范组件命名、目录规范
- 定义数据结构（包车/租赁记录）
- 定义后台字段与导出逻辑
- 定义开发流程、Git 提交规范、编码规范

## 3. Design System（由 Agent A 维护）

### 配色系统
- Primary（主色）：#1452A3
- Accent（强调色）：#F59E0B
- Background Light：#F3F4F6
- Text Dark：#111827
- Text Secondary：#6B7280
- Border Gray：#E5E7EB
- Error（错误红）：#DC2626

### 字体层级
- H1：text-3xl md:text-4xl font-semibold
- H2：text-2xl md:text-3xl font-semibold
- H3：text-xl font-semibold
- Body：text-base leading-relaxed
- Caption：text-sm text-gray-500

### 圆角 & 阴影
- 卡片：rounded-xl shadow-sm
- 主按钮：rounded-full bg-primary text-white
- 次按钮：rounded-full border border-primary text-primary
- 输入框：rounded-lg border border-gray-300

### 间距系统（4/8pt）
- Section：
  - Mobile：py-8
  - Desktop：py-12

## 4. Component Guidelines

必须实现以下基础组件：
- Header / Footer
- PrimaryButton / SecondaryButton
- Card / Tag
- FormField / TextInput / SelectInput / Textarea

## 5. Pages Blueprint

### 首页 `/`
1. Banner（品牌视觉主屏）
2. 服务场景
3. 服务优势
4. 精选车型
5. 客户案例
6. 联系方式

### 包车 `/charter`
- 包车介绍
- 包车表单

### 租赁 `/rental`
- 租赁介绍
- 租赁表单

### 公司简介 `/about`
### 车型展示 `/fleet`
### 客户案例 `/cases`
### 联系我们 `/contact`
### 后台 `/admin`

## 6. Data Model
{
  id: string,
  type: "charter" | "rental",
  name: string,
  phone: string,
  createdAt: Date,
  summary: string,
  details: Record<string, any>
}

## 7. Project Structure

/app  
  /components  
  /pages  
/design-system  
/public  
AGENTS.md

## 8. Workflow
1. Agent A 输出视觉结构  
2. Agent B 输出代码  
3. Agent C 校验结构  
4. 三者共同自检

## 9. Definition of Done
- 视觉符合设计系统  
- 自适应良好  
- 文案完整  
- 无多余颜色  
- 代码规范  

## 10. 进度与后续计划（记录）

### 当前完成
- 基础框架：Next.js 14 + TS + Tailwind，设计系统颜色/字号/间距/圆角已落地。
- 页面：首页、包车 `/charter`、租赁 `/rental`、车型 `/fleet`、案例 `/cases`、公司简介 `/about`、联系我们 `/contact` 均已完成结构与占位内容，使用统一组件（Section/Container/Card/Button/Form/Tag等），lint 通过。
- 安全：依赖升级至 `next@14.2.33`，`npm audit` 为零。
- 视觉/交互：全局按钮/卡片/Tag/表单 hover 与 focus 反馈统一升级，Header/Footers 强化 CTA，首页流线对齐参考站点节奏。
- 本地化：文案突出淄博定位（首屏、包车/租赁/联系/About 页，热线 0533、地址示意等）。
- 新增页面：旅游线路推荐 `/tourism`（本地线路卡片、优势、流程、表单、FAQ），首页新增旅游专区与入口，导航/页脚增加旅游链接。

### 待办
- 参考 sherpahire.com 的视觉/交互，优化已完成页面：首屏留白与 CTA 质感、卡片/Tag 样式、hover 细节、栅格与数据卡展示等（保持现有 Design System）。
- 后台 `/admin` 骨架：过滤/搜索区、列表表格（姓名/电话/类型/时间/摘要）、导出占位、数据摘要卡、移动端卡片式列表。
- 交互与校验：表单前端验证、错误态、成功提示；表单/导航微动效。
- 旅游页与首页：补充真实图片/图标、更多线路和价格梯度，完善 hover/动画细节；对齐 375/768/1440 自适应。
- 资源替换：Logo/车型/图标等占位资产后续补充。
- 自检与优化：375/768/1440 自适应检查、可访问性/语义化审查、性能与打包检查。
